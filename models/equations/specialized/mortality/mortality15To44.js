import { Table } from "../../table.js";

export class Mortality15To44 extends Table {
  constructor() {
    super("mortality15To44", 8, [0.0266, 0.0171, 0.011, 0.0065, 0.004, 0.0016, 0.0008], 20, 80, 10);

    this.units = "deaths per person-year";
    this.dependencies = ["lifeExpectancy"];
    this.plottable = true;
    this.sequenceNumber = 87;
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  updateFn(t, dt) {
    return this._lifeExpectancy.k;
  }
}
