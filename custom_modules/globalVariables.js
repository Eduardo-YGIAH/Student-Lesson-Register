const Student = require("../Classes/studentClass");

const student1 = new Student("Eduardo");
const student3 = new Student("Vikram");
const student2 = new Student("Simona");
const student4 = new Student("Serina");
const student5 = new Student("Dan");
const student6 = new Student("Anna");
const student7 = new Student("Neeraja");
const student8 = new Student("Nilesh");
const student9 = new Student("Jennifer");
const students = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9
];

module.exports = {
  student1: student1,
  student2: student2,
  student3: student3,
  student4: student4,
  student5: student5,
  student6: student6,
  student7: student7,
  student8: student8,
  student9: student9,
  students: students
};
