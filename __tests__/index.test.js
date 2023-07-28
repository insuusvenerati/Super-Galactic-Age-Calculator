import AgeCalculator from "../src";

describe("AgeCalculator", () => {
  test("calculate age in mercury years", () => {
    const calc = new AgeCalculator(36);

    expect(calc.calculateAge("Mercury")).toBe(150);
  });

  test("calculate age in venus years", () => {
    const calc = new AgeCalculator(36);

    expect(calc.calculateAge("Venus")).toBeCloseTo(58.06);
  });

  test("calculate age in Mars years", () => {
    const calc = new AgeCalculator(36);

    expect(calc.calculateAge("Mars")).toBeCloseTo(19.148);
  });

  test("calculate age in Jupiter years", () => {
    const calc = new AgeCalculator(36);

    expect(calc.calculateAge("Jupiter")).toBeCloseTo(3.035);
  });
});
