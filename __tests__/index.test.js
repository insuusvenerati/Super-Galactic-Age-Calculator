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

  test("calculate years passed since an age in Venus years", () => {
    expect(calc.yearsSinceAge(30, "Venus")).toBeCloseTo(9.677);
  });

  test("calculate years passed since an age in Mars years", () => {
    expect(calc.yearsSinceAge(30, "Mars")).toBeCloseTo(3.191);
  });

  test("calculate years passed since an age in Jupiter years", () => {
    expect(calc.yearsSinceAge(30, "Jupiter")).toBeCloseTo(0.505);
  });

  test("calculate years until age in Mercury years", () => {
    expect(calc.yearsToAge(60, "Mercury")).toBe(100);
  });

  test("calculate years until age in Venus years", () => {
    expect(calc.yearsToAge(60, "Venus")).toBeCloseTo(38.709);
  });

  test("calculate years until age in Mars years", () => {
    expect(calc.yearsToAge(60, "Mars")).toBeCloseTo(12.765);
  });

  test("calculate years until age in Jupiter years", () => {
    expect(calc.yearsToAge(60, "Jupiter")).toBeCloseTo(2.023);
  });
});
