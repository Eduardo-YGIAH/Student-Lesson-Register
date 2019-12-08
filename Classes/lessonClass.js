const colors = require("colors");

class Lesson {
  constructor(teacher, students) {
    if (!teacher || !students) {
      throw new Error(
        colors.red(
          "Please insert a teacher as first argumnet and an array of students as second"
        )
      );
    } else {
      this.teacher = teacher;
      this.students = students;
    }
  }
  markOnTime(student) {
    return this.students
      .filter(element => element.name === student)
      .map(student => ({ ...student, onTime: true }));
  }
  markLate(student) {
    return this.students
      .filter(element => element.name === student)
      .map(student => ({ ...student, wasLate: true }));
  }

  outputSummary(studentsOnTime, studentsLate) {
    console.log(
      colors.blue(
        `${this.teacher.subject} lesson was conducted by ${this.teacher.name}`
      )
    );
    console.log(colors.red("--------------"));
    console.log(colors.red("| Attendance |"));
    console.log(colors.red("--------------"));

    studentsLate.forEach(student => {
      console.log(colors.yellow(`${student.name} was late`));
    });

    studentsOnTime.forEach(student => {
      console.log(colors.green(`${student.name} was on time`));
    });

    let markedStudents = [...studentsOnTime, ...studentsLate];

    const absentStudents = this.students.filter(student => {
      return !markedStudents.some(markedStudent => {
        return student.name === markedStudent.name;
      });
    });

    absentStudents.forEach(st =>
      console.log(colors.red(`${st.name} was absent`))
    );
  }
}

module.exports = Lesson;
