# User Documentation
## Files
- main.gs
  - This is the main class where the user should run the program
- utilities.gs
  - A general file which carries out various functions to help the program run
- podCreator.gs
  - This file takes the Students and Volunteers name, gender, math class, and middle school and based on the results, they are placed into pods consisting of one volunteer and two students.
- scheduleCreator.gs
  - This file takes each pod and assigns them a schedule....
- printSchedule.gs
  - This file prints each student's schedule on a new Google Doc
  ![Schedule Template Image](https://i.ibb.co/h1dv7NK/scheduler-Template.png)
- printRoster.gs
  - This file will create a Google Doc that displays each teacher and the students they will have in their class. 
  ![Roster Image](https://i.ibb.co/CJSKxR1/roster.png)
-readData.gs
  - This file reads and retrieves data from the google sheets.
-classes.gs
  - This file contains multiple classes which creates student and volunteer objects with attributes such as name, interests, middle school, etc.
## Prior To Running The Program
- Check for duplicate names and delete
  - In the google sheet containing the data, check for duplicate names, right click the name, and choose "delete row." Same thing would apply if you want to remove a student
  - If you've already run Pod Creator and want the program to create new pods, delete everything on the pod_data sheet.
## How To Use
1. Open all event files (Volunteer and Student forms, Response Google Sheets, and Blank Roster)
2. Navigate to the response sheet, click tools, click "Script Editor" in the dropdown menu
![Tools to Script Editor](https://i.ibb.co/pKqWxMm/responses.png)
3. Click the "main.gs" file and click run at the top of the screen
4. You will then see the pods being printed out to the console. 
    - Note the creation of the roster will be done almost instantly, but please allow 5-10 minutes for each students schedule to be created and added to the folder.
    - During the 5-10 minutes the console will constantly be updating and printing new information and by the end the console will inform you once all documents are made and when the program is finished running.
    - The students' schedules and teacher's rosters will not render while the program is running. They will only fill in when the program finishes running.
5. The program should conclude and all files will be Rosters and Schedules should be created. 
6. If you want to run only specific parts of the code in main.gs, comment out the sections you don't want to run using the JS comment indicators shown below. The sections of code are clearly labeled.

``` /* this is commented code */ ```

## The Settings Feature (Changing Class/Teacher Information)
  - The settings feature will allow the user to change the Teachers Name, Room Number, Class Name, and Schedule Times, without having to change any parts of the code itself.                   
### How to Navigate the Settings:
- Note only use the Settings feature if Teacher name, room number, class name, schedule times, or pod sizes, need to be altered.
- In the Shadowing Scheduler Google Sheet, at the bottom there will be multiple different tabs, there are three specific tabs that should be accessed to change settings, "Teachers," "Schedule Times," and "Additional Settings." Click these tabs and add in the data.
![Settings Tabs](https://i.ibb.co/9rQng5s/settings-Tab.png)