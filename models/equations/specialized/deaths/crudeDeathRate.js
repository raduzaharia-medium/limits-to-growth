import { Aux } from "../../aux.js";

export class CrudeDeathRate extends Aux {
  constructor() {
    super("crudeDeathRate", 18);

    this.units = "deaths per 1000 person-years";
    this.dependencies = ["deathsPerYear", "population"];
    this.plotColor = "#650d99";
    this.plotMin = 0;
    this.plotMax = 50;
  }

  set deathsPerYear(value) {
    this._deathsPerYear = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn() {
    return (1000 * this._deathsPerYear.k) / this._population.k;
  }
}
