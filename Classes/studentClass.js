const colors = require("colors");

class Student {
  constructor(name) {
    if (!name) {
      throw new Error(
        colors.red("Please insert a Student name as a paramater")
      );
    } else {
      this.name = name;
      this.onTime = false;
      this.wasLate = false;
    }
  }
}

module.exports = Student;
