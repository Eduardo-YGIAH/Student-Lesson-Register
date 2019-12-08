const Student = require("../Classes/studentClass");
const colors = require("colors");

test("creates student Object", () => {
  expect(new Student("Josh")).toEqual({
    name: "Josh",
    onTime: false,
    wasLate: false
  });
});
test("creates student Object", () => {
  expect(new Student("Richard")).toEqual({
    name: "Richard",
    onTime: false,
    wasLate: false
  });
});
test("if a paramater is not passed it throws an error message", () => {
  const student = name => {
    if (!name) {
      throw new Error(
        colors.red("Please insert a Student name as a paramater")
      );
    }
  };
  expect(student).toThrow(
    colors.red("Please insert a Student name as a paramater")
  );
});
