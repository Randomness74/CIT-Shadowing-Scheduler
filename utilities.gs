function rotateArray(arr){  
  var i, temp;
  temp = arr[0];
  for(i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i+1];
  }
  arr[i] = temp;
  return arr;
}

function getRowData(row, sheet, number_of_columns) {
  var range = sheet.getRange(row, 1, 1, number_of_columns);
  return range.getValues();
}

function shuffleArray(array) {
    for (var i = 0; i < array.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function mergeSubLists(list1) {
  return [].concat.apply([], list1)
}

function condenseArray(array) {
    var condensedArray = [];
    var item = "";
    for (i = 0; i < array.length; i++) {
        item = array[i];
        if (!condensedArray.includes(item)) {
            condensedArray.push(item);
        }
    }
    return condensedArray;
}
function writeToSheets(array, sheet) {
  /*
    Parameters
    var array - should be an array consisting of arrays. inner arrays are the rows.
    var sheet - number of the sheet written to (starting at 0 from the left)
  */
  Logger.log("Writing data to sheets...");
  for (var i = 0; i < array.length; i++) {
    // test to see if array is working
    // Logger.log("Writing array item number " + i + " with value " + array[i].toString());
    sheet.appendRow(array[i]);
  }
}

function checkPush(array, value) {
  var x = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      x = 1;
    }
  }
  if (x == 0) {
    array.push(value)
  }
}


function retrieveName(array) {
  Logger.log("Retrieving name...")
  // console.log(array)
  array2 = []
  if (array[0].name) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].name) {
        array2.push(array[i].name)
      } else {
        array2.push("Could not retrieve name")
      }
    }
    return array2;
  } else if (array[0][0].name) {
    retrieveNames(array[0])[0];
  } else {
    return;
  }
}

function promptForInput(text1, text2) {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt(text1, text2, ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() == ui.Button.OK) {
    Logger.log('Returning the following: ' + response.getResponseText());
    return response.getResponseText();
  } 
  else if (response.getSelectedButton() == ui.Button.CANCEL) {
    Logger.log('The user canceled the dialog.');
    return 'null';
  } 
  else {
    Logger.log('The user closed the dialog.');
    return 'null';
  }
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Additional Objects')
      .addItem('Add a new person', 'convertToObject')
      .addToUi();
}

function getScheduleTimes() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[4];
  var times = [];
  for (var i = 0; i < 5; i++) {
    row_data = getRowData(i+2, sheet, 3)[0]
    times.push(row_data[1].toString() + ' - ' + row_data[2].toString())
  }
  // console.log(times)
  return times
}

function convertToObject() {
  Logger.log("Enter n/a if any field cannot be filled.")
  var v_or_s = promptForInput("Volunteer or Student", "Do you want to create a volunteer or student object? (Enter V for volunteer and S for student)")
  var name = promptForInput("Name", "What is their name? (First and last)")
  var math_class = promptForInput("Math Class", "What was/will be their 9th grade math class?")
  var gender = promptForInput("Gender", "What is their gender?")
  var middle_school = promptForInput("Middle School", "What was their middle school? (do not include 'middle school')")
  if (v_or_s == "V" || v_or_s == "v") {
    return constructVolunteerObject(name, gender, math_class, middle_school)
  } else {
    return constructStudentObject(name, gender, math_class, middle_school)
  }
}