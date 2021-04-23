function printRoster(teacher) {
    Logger.log("Creating roster for " + teacher.name);
    var blocks = teacher.blocks;
    //console.log("fdsfsdf")
    //console.log(blocks)

    var doc = DocumentApp.create("Roster for " + teacher.name);
    docFile = DriveApp.getFileById(doc.getId());
    var ss = SpreadsheetApp.create("Roster for " + teacher.name);
    ssFile = DriveApp.getFileById(ss.getId());
    const folder = DriveApp.getFolderById("1gK-h042tPynrCs_SH_lLkGrXPhF8Zc_N");
    folder.addFile(docFile);
    folder.addFile(ssFile);
    Logger.log("Successfully created roster documents.")


    // styling
    var headerStyle = {};
    headerStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
    headerStyle[DocumentApp.Attribute.FONT_SIZE] = 32;
    headerStyle[DocumentApp.Attribute.BOLD] = true;

    // create body variable for google doc
    var body = doc.getBody();
    body.insertParagraph(0, "Roster for " + teacher.name).setAttributes(headerStyle);

    // console.log(blocks)
    // loop through each block
    ss.appendRow(["Pod Mentor", "Pod Student 1", "Pod Student 2"]);
    for (var i = 0; i < blocks.length; i++) {
        for (var b = 0; b < blocks[i].length; b++) {
          // console.log(typeof(blocks[i][b][0]))
          if (typeof(blocks[i][b][0]) == "object") {
            blocks[i][b] = blocks[i][b][0];
          }
        }

        // add tables to google doc
        // console.log(blocks[i])
        if (blocks[i] && blocks[i][0] && blocks[i][0][0]) {
          body.appendParagraph("Block " + (i + 1));
          body.appendTable(blocks[i]);
        }
        // add rows to spreadsheet
        ss.appendRow(["Block " + (i + 1)]);
        for (var a = 0; a < blocks[i].length; a++) {
          ss.appendRow(blocks[i][a]);
        }
        ss.appendRow(['', '', '']);
    }
}