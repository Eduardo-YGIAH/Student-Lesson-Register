const colors = require("colors");

class Teacher {
  constructor(subject, name) {
    if (!subject || !name) {
      throw new Error(
        colors.red(
          "Please insert a Class Subject as first paramater and the Teacher name as second paramater"
        )
      );
    } else {
      this.subject = subject;
      this.name = name;
    }
  }
}

module.exports = Teacher;
