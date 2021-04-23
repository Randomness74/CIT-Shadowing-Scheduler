var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[5];
var pod_size = getRowData(1, sheet, 2)[1];
if (typeof(pod_size) != 'number' || pod_size < 1) {
  pod_size = 2;
}

function createPods(list1, list2, size) {
  pods = [];
  // Logger.log(list1)
  // Logger.log(list2)
  emergency_counter = 0;
  while (list1.length > 0 && list2.length >= pod_size && emergency_counter < 200) {
    for (var k = 0; k < list1.length; k++) {
      if (list1.length > 0 && list2.length > 0) {
        maybe_pods = [list1[k]];
        for (var l = 0; l < pod_size; l++) {
          if (list2[pod_size*k + l]) {
            maybe_pods.push(list2[pod_size*k + l]);
          } else {
            break;
          }
        }
        if (maybe_pods.length > pod_size) {
          pods.push(maybe_pods);
          list1.splice(k, 1);
          list2.splice(pod_size*k, pod_size);
        }
      }
    }
    /*
    Why is there an emergency counter?

    Well, the function would inexplicably enter infinite loops, so this counter prevents it from doing so. 
    */
    emergency_counter++;
  }
  new_pods = [];
  if (pods != []) {
    for (var i = 0; i < pods.length; i++) {
      if (pods[i] != null) {
        new_pods.push(new Pod(pods[i]));
      }
    }
  }
  return new_pods;
}

function writePodstoSheets(pods) {
  final_array = [["Mentor", "Member 1", "Member 2"]];
  for (var i = 0; i < pods.length; i++) {
    final2_array = [];
    // console.log("here")
    for (var j = 0; j < pods[i].members.length; j++) {
      // console.log("here2")
      // console.log(pods[i].members[j]);
      final2_array.push(JSON.stringify(pods[i].members[j]));
    }
    final_array.push(final2_array);
  }
  // console.log(final_array)
  return final_array;
}

function podMaker(volList, stuList) {
  // console.log("This should work.")
  volLevel1 = [[], []];
  stuLevel1 = [[], []];
  // Volunter sorting based upon gender
  for (var i = 0; i < volList.length; i++) {
    if (volList[i].gender == "Male") {
      volLevel1[0].push(volList[i]);
    }
    else if (volList[i].gender == "Female") {
      volLevel1[1].push(volList[i]);
    }
  }
  // Student sorting based upon gender
  for (var i = 0; i < stuList.length; i++) {
    if (stuList[i].gender == "Male") {
      stuLevel1[0].push(stuList[i]);
    }
    else if (stuList[i].gender == "Female") {
      stuLevel1[1].push(stuList[i]);
    }
  }

  // Logger.log(volLevel1)
  volLevel2 = [[[], []], [[], []]];
  stuLevel2 = [[[], []], [[], []]];

  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j < volLevel1[i].length; j++) {
      if (volLevel1[i][j].math_class == "Geometry") {
        volLevel2[i][0].push(volLevel1[i][j]);
      }
      else if (volLevel1[i][j].math_class == "Algebra II" || volLevel1[i][j].math_class == "Pre-calculus") {
        volLevel2[i][1].push(volLevel1[i][j]);
      }
    }
  }

  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j < stuLevel1[i].length; j++) {
      if (stuLevel1[i][j].math_class == "Geometry") {
        stuLevel2[i][0].push(stuLevel1[i][j]);
      }
      else if (stuLevel1[i][j].math_class == "Algebra II" || stuLevel1[i][j].math_class == "Pre-calculus") {
        stuLevel2[i][1].push(stuLevel1[i][j]);
      }
    }
  }

  pods = []
  // nested method of pod creation
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
      pods = pods.concat(createPods(volLevel2[i][j], stuLevel2[i][j], pod_size));
    }
    volLevel2[i] = mergeSubLists(volLevel2[i]);
    stuLevel2[i] = mergeSubLists(stuLevel2[i]);
    pods = pods.concat(createPods(volLevel2[i], stuLevel2[i], pod_size));
  }


  volLevel2 = mergeSubLists(volLevel2);
  stuLevel2 = mergeSubLists(stuLevel2);
  
  pods = pods.concat(createPods(volLevel2, stuLevel2, pod_size));

  if ((volLevel2.length + stuLevel2.length < (pod_size + 2)) && volLevel2.length > 0 && stuLevel2.length > 0) {
    potential_pod = volLevel2.concat(stuLevel2);
    // console.log("Potential pod " + potential_pod)
    pods.push(new Pod(potential_pod));
  }

  /*
  Logger.log(pods)
  for (var i = 0; i < pods.length; i++) {
    Logger.log("Pod number " + (i+1))
    Logger.log(pods[i])
  }
  */

  return pods;
}