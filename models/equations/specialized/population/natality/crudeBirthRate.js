import { Aux } from "../../../aux.js";

export class CrudeBirthRate extends Aux {
  constructor() {
    super("crudeBirthRate", 31);

    this.units = "births per 1000 person-years";
    this.dependencies = ["population", "birthsPerYear"];
    this.max = 50;
    this.sequenceNumber = 22;
  }

  set birthsPerYear(value) {
    this._birthsPerYear = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn(t, dt) {
    return (1000 * this._birthsPerYear.j) / this._population.k;
  }
}
