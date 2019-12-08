# Mark a Lesson Attendance for Students

A Node.js application that uses Classes to set different types of elements in the program (Students, Teachers and Lessons).

The application allows you to create students by passing their name as a paramater and stores their data in a collection of Students.

```
const Student = require("../Classes/studentClass");

const student1 = new Student("Eduardo");
const student2 = new Student("Vikram");
const student3 = new Student("Simona");
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
]
```

You can set up a teacher by passing the lesson subject and the teacher name as arguments.

```
const Teacher = require("./Classes/teacherClass");

const teacher = new Teacher("Javascript", "Tom");
```

You can set up a lesson by passing the teacher object and the collection of Students that should be attending.

```
const Lesson = require("./Classes/lessonClass");
const gbv = require("./custom_modules/globalVariables");

const javascriptLesson = new Lesson(teacher, gbv.students);
```

You can then mark each student as on time or late by aplying the markOnTime() or markLate() methods to each student and store them in the respective studentsOnTime or studentsLate collections.

```
let studentsOnTime = [
  ...javascriptLesson.markOnTime(gbv.student1.name),
  ...javascriptLesson.markOnTime(gbv.student2.name),
  ...javascriptLesson.markOnTime(gbv.student3.name),
  ...javascriptLesson.markOnTime(gbv.student4.name)
];

let studentsLate = [
  ...javascriptLesson.markLate(gbv.student5.name),
  ...javascriptLesson.markLate(gbv.student6.name),
  ...javascriptLesson.markLate(gbv.student7.name)
];
```

Any unmarked students will be automatically considered Absent by the program.

The application will display the Attendance in the console once you run `node index`

```
Javascript lesson was conducted by Tom
--------------
| Attendance |
--------------
Dan was late
Anna was late
Neeraja was late
Eduardo was on time
Simona was on time
Vikram was on time
Serina was on time
Nilesh was absent
Jennifer was absent
```

colors package was used to highlight the result.
`npm install colors`
