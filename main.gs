function main() {
  // basic data importation and stuff
  Logger.log("If this doesn't work, I swear");
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  /*
  Logger.log("Making pods...")
  Logger.log(retrieveData(sheet[1], "V"))
  x = podMaker(retrieveData(sheet[1], "V"), retrieveData(sheet[0], "S"));
  Logger.log("Writing pods to sheets...")
  writeToSheets(writePodstoSheets(x), sheet[2])
  */
  Logger.log("Creating schedules...")
  y = scheduleCreator(readFromSheets(sheet[2]))
  
  /*
  Logger.log("Printing student schedules...")
  for (var i = 0; i < y.length; i++) {
    for (var j = 0; j < y[i].members.length; j++) {
      printSchedule(y[i], j);
    }
  }
  */

  Logger.log("Printing rosters...")
  printRoster(teacher0);
  printRoster(teacher1);
  printRoster(teacher2);
  printRoster(teacher3);
  printRoster(teacher4);

  
  Logger.log("The program has finished running.")
}