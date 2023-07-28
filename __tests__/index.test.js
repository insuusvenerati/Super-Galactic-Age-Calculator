describe("AgeCalculator", () => {
  test("calculate age in mercury years", () => {
    const calc = new AgeCalulator(36);

    expect(calc.calculateAge("Mercury")).toBe(233.33);
  });
});
