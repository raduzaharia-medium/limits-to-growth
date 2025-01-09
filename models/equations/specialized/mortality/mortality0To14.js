import { Table } from "../../table.js";

export class Mortality0To14 extends Table {
  constructor() {
    super("mortality0To14", 4, [0.0567, 0.0366, 0.0243, 0.0155, 0.0082, 0.0023, 0.001], 20, 80, 10);

    this.units = "deaths per person-year";
    this.dependencies = ["lifeExpectancy"];
    this.plottable = true;
    this.sequenceNumber = 86;
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  updateFn(t, dt) {
    return this._lifeExpectancy.k;
  }
}
