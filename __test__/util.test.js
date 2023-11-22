const { validate } = require("webpack");
const { generateText, validateInput } = require("../util.js");

describe("Test generateText", () => {
  test("Alumno edad válida", () => {
    const result = generateText("Juan", 30, "Intermedio");
    expect(result).toBe("Registro OK de Juan en: Intermedio.");
  });
});

describe("Test validateInput", () => {
  test("Cadena no vacía", () => {
    expect(validateInput("test", true)).toBeTruthy();
  });
});
