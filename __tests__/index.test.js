import AgeCalculator from "../src";

describe("AgeCalculator", () => {
  test("calculate age in mercury years", () => {
    const calc = new AgeCalculator(36);

    expect(calc.calculateAge("Mercury")).toBe(150);
  });
});
