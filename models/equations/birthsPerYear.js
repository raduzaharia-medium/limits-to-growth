import { Rate } from "../rate.js";

export class BirthsPerYear extends Rate {
  constructor() {
    super("birthsPerYear", 30);

    this.units = "persons per year";
    this.plotThisVar = true;
    this.reproductiveLifetime = 30; // years
    this.populationEquilibriumTime = 4000; // year
  }

  set deathsPerYear(value) {
    this._deathsPerYear = value;
  }

  set totalFertility(value) {
    this._totalFertility = value;
  }

  set population15To44(value) {
    this._population15To44 = value;
  }

  updateFn() {
    const after = this._deathsPerYear.k;
    const before = (this._totalFertility.k * this._population15To44.k * 0.5) / this.reproductiveLifetime;

    return clip(after, before, t, this.populationEquilibriumTime);
  }
}
