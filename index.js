const Teacher = require("./Classes/teacherClass");
const Lesson = require("./Classes/lessonClass");
const gbv = require("./custom_modules/globalVariables");

const teacher = new Teacher("Javascript", "Tom");

const javascriptLesson = new Lesson(teacher, gbv.students);

let studentsOnTime = [
  ...javascriptLesson.markOnTime("Eduardo"),
  ...javascriptLesson.markOnTime(gbv.student2.name),
  ...javascriptLesson.markOnTime(gbv.student3.name),
  ...javascriptLesson.markOnTime(gbv.student4.name)
];

let studentsLate = [
  ...javascriptLesson.markLate(gbv.student5.name),
  ...javascriptLesson.markLate(gbv.student6.name),
  ...javascriptLesson.markLate(gbv.student7.name)
];

javascriptLesson.outputSummary(studentsOnTime, studentsLate);
