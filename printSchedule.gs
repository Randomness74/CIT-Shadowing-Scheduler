function printSchedule(pod, index) {
  var schedule_time = getScheduleTimes();
  /*
  Logger.log("Creating schedule for " + pod.members[index].name)
  Logger.log(pod.members)
  Logger.log(pod.schedule)
  */
  var doc = DocumentApp.create('Schedule for ' + pod.members[index].name);
  docFile = DriveApp.getFileById(doc.getId());
  DriveApp.getFolderById("1gK-h042tPynrCs_SH_lLkGrXPhF8Zc_N").addFile(docFile);
  // styles below
  var headerStyle = {};
  headerStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  headerStyle[DocumentApp.Attribute.FONT_SIZE] = 32;
  headerStyle[DocumentApp.Attribute.BOLD] = true;

  var bodyStyle = {};
  bodyStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  bodyStyle[DocumentApp.Attribute.FONT_SIZE] = 12;
  headerStyle[DocumentApp.Attribute.BOLD] = false;

  // inserts text
  var body = doc.getBody();
  console.log(doc.getBody());
  body.appendParagraph("Schedule for " + pod.members[index].name).setAttributes(headerStyle);
  body.appendParagraph("Group Mentor: " + pod.members[0].name).setAttributes(bodyStyle);
  string = ""
  for (var i = 1; i < pod.members.length; i++) {
    string += pod.members[i].name + ", ";
  }
  body.appendParagraph("Group Members: " + string);
  schedule = [["Time", "Class", "Room #", "Teacher"], [schedule_time[1], pod.schedule[0].class_name, pod.schedule[0].room_number, pod.schedule[0].name], [schedule_time[2], pod.schedule[1].class_name, pod.schedule[1].room_number, pod.schedule[1].name], [schedule_time[0], "Lunch", "Cafeteria", "N/A"], [schedule_time[3], pod.schedule[2].class_name, pod.schedule[2].room_number, pod.schedule[2].name], [schedule_time[4], pod.schedule[3].class_name, pod.schedule[3].room_number, pod.schedule[3].name]];
  // console.log(schedule)
  body.appendTable(schedule);
  for (var k = 0; k < pod.members.length; k++) {
    body.appendParagraph(pod.members[k].name + " 's information: " + "\n\tGender: " + pod.members[k].gender + "\n\tMiddle School: " + pod.members[k].middle_school + "\n\tMath Class: " + pod.members[k].math_class + "\n\tInterests: " + pod.members[k].interests + "\n\tEmail: " + pod.members[k].email);
    // console.log("jere")
  }
  console.log("done");
}

// THIS FUNCTION IS JUST FOR TESTING FONTS
function testFonts() {
  var doc = DocumentApp.openById("1gaLq2pcATwGnppkxzh9t4qcSkMKA9mKGW7GMgF68YvA");
  doc.setText('');
  var font_families = ["Arial", "Calibri", "Cambria", "Consolas", "Times New Roman", "Spectral", "Ubuntu", "Verdana", "Georgia", "Playfair"];
  var body = doc.getBody();

  for (var i = 0; i < font_families.length; i++) {
    // styles below
    var headerStyle = {};
    headerStyle[DocumentApp.Attribute.FONT_FAMILY] = font_families[i];
    headerStyle[DocumentApp.Attribute.FONT_SIZE] = 32;
    headerStyle[DocumentApp.Attribute.BOLD] = true;
    // inserts text
    body.appendParagraph("Schedule for Grant Lee").setAttributes(headerStyle);
  }
}
