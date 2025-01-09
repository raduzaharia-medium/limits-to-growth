import { Table } from "../../table.js";

export class Mortality65AndOver extends Table {
  constructor() {
    super("mortality65AndOver", 16, [0.13, 0.11, 0.09, 0.07, 0.06, 0.05, 0.04], 20, 80, 10);

    this.units = "deaths per person-year";
    this.dependencies = ["lifeExpectancy"];
    this.plottable = true;
    this.sequenceNumber = 89;
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  updateFn() {
    return this._lifeExpectancy.k;
  }
}
