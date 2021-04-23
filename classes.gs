class Student {
  constructor(name, gender, math_class, middle_school, interests, email) {
    this.name = name;
    this.gender = gender;
    this.math_class = math_class;
    this.interests = interests;
    this.middle_school = middle_school;
    this.email = email;
  }
}

class Volunteer {
  constructor(name, gender, math_class, middle_school, interests, grade, email) {
    this.name = name;
    this.gender = gender;
    this.math_class = math_class;
    this.interests = interests;
    this.middle_school = middle_school;
    this.grade = grade;
    this.email = email;
  }
}

class Pod {
  constructor(members) {
    this.members = members;
    this.schedule = [];
  }
}

function displayPrompt(text) {
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt(text);
}

function testClasses() {
  var grant = new Student("Grant L", "Male", "Algebra II", "Moody");
  Logger.log(grant.name);
  Logger.log(grant.gender);

  var joshua = new Student("Joshua C", "Male", "Algebra II", "Short Pump", "abc@gmail.com");
  Logger.log(joshua.name);
  Logger.log(joshua.gender);
}
