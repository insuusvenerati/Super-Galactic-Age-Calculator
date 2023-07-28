import AgeCalculator from "../src";

describe("AgeCalculator", () => {
  const calc = new AgeCalculator(36);
  test("calculate age in mercury years", () => {
    expect(calc.calculateAge("Mercury")).toBe(150);
  });

  test("calculate age in venus years", () => {
    expect(calc.calculateAge("Venus")).toBeCloseTo(58.06);
  });

  test("calculate age in Mars years", () => {
    expect(calc.calculateAge("Mars")).toBeCloseTo(19.148);
  });

  test("calculate age in Jupiter years", () => {
    expect(calc.calculateAge("Jupiter")).toBeCloseTo(3.035);
  });

  test("calculate years passed since an age in Mercury years", () => {
    expect(calc.yearsSinceAge(30, "Mercury")).toBe(25);
  });
});
