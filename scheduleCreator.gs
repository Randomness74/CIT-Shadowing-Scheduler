/*
    ==========
    SETTINGS
    ==========
    Note: Order of the teachers does not matter
    */


var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[3];
var teacher0_data = getRowData(2, sheet, 4)[0];
var teacher1_data = getRowData(3, sheet, 4)[0];
var teacher2_data = getRowData(4, sheet, 4)[0];
var teacher3_data = getRowData(5, sheet, 4)[0];
var teacher4_data = getRowData(6, sheet, 4)[0];

// Do not move this class
// It will break the program if you do so
class Teacher {
  constructor(name, room_number, class_name) {
    this.name = name;
    this.room_number = room_number.toString();
    this.class_name = class_name;
    this.blocks = [[], [], [], []];
  }
}

var teacher0 = new Teacher(teacher0_data[1], teacher0_data[2], teacher0_data[3]);
var teacher1 = new Teacher(teacher1_data[1], teacher1_data[2], teacher1_data[3]);
var teacher2 = new Teacher(teacher2_data[1], teacher2_data[2], teacher2_data[3]);
var teacher3 = new Teacher(teacher3_data[1], teacher3_data[2], teacher3_data[3]);
var teacher4 = new Teacher(teacher4_data[1], teacher4_data[2], teacher4_data[3]);
/*
console.log(teacher0)
console.log(teacher1)
console.log(teacher2)
console.log(teacher3)
console.log(teacher4)
*/

function readFromSheets(sheet) {
  Logger.log("Reading data from pod sheet...");
  objects = [];
  for (var i = 2; i <= sheet.getMaxRows(); i++) {
    if (!getRowData(i, sheet, pod_size + 1)[0][0]) {
      break;
    }
    raw_data = getRowData(i, sheet, pod_size + 1)[0];
    // Logger.log(raw_data)
    for (var j = 0; j < raw_data.length; j++) {
      // console.log(raw_data[j]);
      raw_data[j] = JSON.parse(raw_data[j]);
    }
    objects.push(new Pod(raw_data));
  }
  return objects;
}

function scheduleCreator(pods) {
  Logger.log("Creating schedules...");
    var shuffledPods = [];
    var currentPod = 0;
    var teacherOrder = [];
    var i = 0;
    shuffledPods = shuffleArray(pods);
    for (var a = 0; a < shuffledPods.length; a++) {
      i = a; // weird stuff happens using conditionals and the original variable idk
      currentPod = shuffledPods[i];
      if (currentPod.members[0].math_class == "Geometry") {
        // console.log("Geometry has been chosen")
        var teacher5 = teacher4;
      } else {
        var teacher5 = teacher0;
      }
      if (i % 8 === 0) {
              teacherOrder = [teacher3, teacher1, teacher2, teacher5];
              // console.log(retrieveName(currentPod.members))
              // console.log(teacher3.blocks[0])
              checkPush(teacher3.blocks[0], retrieveName(currentPod.members));
              checkPush(teacher1.blocks[1], retrieveName(currentPod.members));
              checkPush(teacher2.blocks[2], retrieveName(currentPod.members));
              checkPush(teacher5.blocks[3], retrieveName(currentPod.members));
            }
            else if (i % 8 === 1) {
              teacherOrder = [teacher1, teacher2, teacher5, teacher3];
              checkPush(teacher3.blocks[3], retrieveName(currentPod.members));
              checkPush(teacher1.blocks[0], retrieveName(currentPod.members));
              checkPush(teacher2.blocks[1], retrieveName(currentPod.members));
              checkPush(teacher5.blocks[2], retrieveName(currentPod.members));
            }
            else if (i % 8 === 2) {
              teacherOrder = [teacher2, teacher5, teacher3, teacher1];
              checkPush(teacher3.blocks[2], [retrieveName(currentPod.members)]);
              checkPush(teacher1.blocks[3], [retrieveName(currentPod.members)]);
              checkPush(teacher2.blocks[0], [retrieveName(currentPod.members)]);
              checkPush(teacher5.blocks[1], [retrieveName(currentPod.members)]);
            }
            else if (i % 8 === 3) {
              teacherOrder = [teacher5, teacher3, teacher1, teacher2];
              checkPush(teacher3.blocks[1], [retrieveName(currentPod.members)]);
              checkPush(teacher1.blocks[2], [retrieveName(currentPod.members)]);
              checkPush(teacher2.blocks[3], retrieveName(currentPod.members));
              checkPush(teacher5.blocks[0], retrieveName(currentPod.members));
            }
            else if (i % 8 === 4) {
              teacherOrder = [teacher1, teacher5, teacher2, teacher3]
              checkPush(teacher3.blocks[3], retrieveName(currentPod.members))
              checkPush(teacher1.blocks[0], retrieveName(currentPod.members))
              checkPush(teacher2.blocks[2], retrieveName(currentPod.members))
              checkPush(teacher5.blocks[1], retrieveName(currentPod.members))
            }
            else if (i % 8 === 5) {
              teacherOrder = [teacher2, teacher3, teacher5, teacher1]
              checkPush(teacher3.blocks[1], retrieveName(currentPod.members))
              checkPush(teacher1.blocks[3], retrieveName(currentPod.members))
              checkPush(teacher2.blocks[0], retrieveName(currentPod.members))
              checkPush(teacher5.blocks[2], retrieveName(currentPod.members))
            }
            else if (i % 8 === 6) {
              teacherOrder = [teacher5, teacher1, teacher3, teacher2]
              checkPush(teacher3.blocks[2], retrieveName(currentPod.members))
              checkPush(teacher1.blocks[1], retrieveName(currentPod.members))
              checkPush(teacher2.blocks[3], retrieveName(currentPod.members))
              checkPush(teacher5.blocks[0], retrieveName(currentPod.members))
            }
            else if (i % 8 === 7) {
              teacherOrder = [teacher3, teacher2, teacher1, teacher5]
              checkPush(teacher3.blocks[0], retrieveName(currentPod.members))
              checkPush(teacher1.blocks[2], retrieveName(currentPod.members))
              checkPush(teacher2.blocks[1], retrieveName(currentPod.members))
              checkPush(teacher5.blocks[3], retrieveName(currentPod.members))
            }

            currentPod.schedule = currentPod.schedule.concat(teacherOrder);
    }
    // console.log(teacher1.blocks);
    return pods;
}
