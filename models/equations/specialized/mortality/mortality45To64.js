import { Table } from "../../table.js";

export class Mortality45To64 extends Table {
  constructor() {
    super("mortality45To64", 12, [0.0562, 0.0373, 0.0252, 0.0171, 0.0118, 0.0083, 0.006], 20, 80, 10);

    this.units = "deaths per person-year";
    this.dependencies = ["lifeExpectancy"];
    this.plottable = true;
    this.sequenceNumber = 88;
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  updateFn() {
    return this._lifeExpectancy.k;
  }
}
