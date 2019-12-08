const Lesson = require("../Classes/lessonClass");
const Teacher = require("../Classes/teacherClass");
const gbv = require("../custom_modules/globalVariables");

const testTeacher = new Teacher("Maths", "Nath");
const testMathLesson = new Lesson(testTeacher, gbv.students);

test("creates lesson Object", () => {
  expect(testMathLesson).toEqual({
    students: [
      { name: "Eduardo", onTime: false, wasLate: false },
      { name: "Simona", onTime: false, wasLate: false },
      { name: "Vikram", onTime: false, wasLate: false },
      { name: "Serina", onTime: false, wasLate: false },
      { name: "Dan", onTime: false, wasLate: false },
      { name: "Anna", onTime: false, wasLate: false },
      { name: "Neeraja", onTime: false, wasLate: false },
      { name: "Nilesh", onTime: false, wasLate: false },
      { name: "Jennifer", onTime: false, wasLate: false }
    ],
    teacher: { name: "Nath", subject: "Maths" }
  });
});

test("throws error if no paramaters are passed", () => {
  const errOneTestLesson = (teacher, students) => {
    if (!teacher || !students) {
      throw new Error(
        colors.red(
          "Please insert a teacher as first argumnet and an array of students as second"
        )
      );
    }
  };
  expect(errOneTestLesson).toThrow(Error);
});

//MARKONTIME METHOD
test("creates a new array with the Student Object where the name property was passed as paramater and where the property onTime is set to true", () => {
  expect(testMathLesson.markOnTime(gbv.student2.name)).toEqual([
    {
      name: "Simona",
      onTime: true,
      wasLate: false
    }
  ]);
});
test("creates a new array with the Student Object where the name property was passed as paramater and where the property onTime is set to true", () => {
  expect(testMathLesson.markOnTime(gbv.student1.name)).toEqual([
    {
      name: "Eduardo",
      onTime: true,
      wasLate: false
    }
  ]);
});

//MARKLATE METHOD
test("creates a new array with the Student Object where the name property was passed as paramater and where the property wasLate is set to true", () => {
  expect(testMathLesson.markLate(gbv.student1.name)).toEqual([
    {
      name: "Eduardo",
      onTime: false,
      wasLate: true
    }
  ]);
});
test("creates a new array with the Student Object where the name property was passed as paramater and where the property wasLate is set to true", () => {
  expect(testMathLesson.markLate(gbv.student5.name)).toEqual([
    {
      name: "Dan",
      onTime: false,
      wasLate: true
    }
  ]);
});
test("creates a new array with the Student Object where the name property was passed as paramater and where the property wasLate is set to true", () => {
  expect(testMathLesson.markLate("Dan")).toEqual([
    {
      name: "Dan",
      onTime: false,
      wasLate: true
    }
  ]);
});

//OUTPUT SUMMARY
test("receives 2 args and logs string with variables", () => {
  expect(
    `${testTeacher.subject} lesson was conducted by ${testTeacher.name}`
  ).toBe(`Maths lesson was conducted by Nath`);
});
