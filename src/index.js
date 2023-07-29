class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.earthToPlanets = {
      Mercury: 0.24,
      Venus: 0.62,
      Jupiter: 11.86,
      Mars: 1.88,
    };
  }

  calculateAge(planet) {
    return this.age / this.earthToPlanets[planet];
  }

  yearsSinceAge(age, planet) {
    return (this.age - age) / this.earthToPlanets[planet];
  }

  yearsToAge(age, planet) {
    return (age - this.age) / this.earthToPlanets[planet];
  }
}

export default AgeCalculator;
