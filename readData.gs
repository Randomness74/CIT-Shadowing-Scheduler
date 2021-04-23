function constructVolunteerObject(array) {
  /*
    Description: Given a volunteer's information, creates an object for easy access.
    Return value:
      A Volunteer object, consisting of:
        .name - Name
        .gender - Gender
        .middle_school - Middle School
        .math_class - Math Class
  */
  return new Volunteer(array[0], array[2], array[4], array[5], array[6], array[3], array[1])
}
function constructStudentObject(array) {
  /*
    Description: Given a volunteer's information, creates an object for easy access.
    Return value:
      A Volunteer object, consisting of:
        .name - Name
        .gender - Gender
        .middle_school - Middle School
        .math_class - Math Class
        .interests - interests

  */
  return new Student(array[0], array[2], array[4], array[3], array[5], array[1])
}
function retrieveData(sheet, type) {
  objects = [];
  for (var i = 2; i <= sheet.getMaxRows(); i++) {
    if (!getRowData(i, sheet, 10)[0][1]) {
      break;
    }
    raw_data = getRowData(i, sheet, 10)[0];
    raw_data[1] = raw_data[2] + " " + raw_data[1]; // combines first and last name
    raw_data[raw_data.length - 2] = raw_data[raw_data.length - 2] + ', ' + raw_data[raw_data.length - 1]
    raw_data.splice(2, 1);
    raw_data.splice(0, 1)
    if (type == "V") {
      objects.push(constructVolunteerObject(raw_data))
    }
    else if (type == "S") {
      objects.push(constructStudentObject(raw_data))
    }
  }
  return objects;
}