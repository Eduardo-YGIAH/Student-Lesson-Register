const Teacher = require("../Classes/teacherClass");
const colors = require("colors");

test("creates teacher Object", () => {
  expect(new Teacher("Maths", "Tom")).toEqual({
    subject: "Maths",
    name: "Tom"
  });
});

test("creates teacher Object", () => {
  expect(new Teacher("Biology", "Bilaal")).toEqual({
    subject: "Biology",
    name: "Bilaal"
  });
});

test("throws error message if no subject and name is given", () => {
  const teacher = (subject, name) => {
    if (!subject || !name) {
      throw new Error(
        colors.red(
          "Please insert a Class Subject as first paramater and the Teacher name as second paramater"
        )
      );
    }
  };
  expect(teacher).toThrow(
    colors.red(
      "Please insert a Class Subject as first paramater and the Teacher name as second paramater"
    )
  );
});
