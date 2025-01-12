import { Table } from "../../../table.js";

export class FecundityMultiplier extends Table {
  constructor() {
    super("fecundityMultiplier", 34, [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0, 1.05, 1.1], 0, 80, 10);

    this.dependencies = ["lifeExpectancy"];
    this.plottable = true;
    this.sequenceNumber = 90;
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  updateFn(t, dt) {
    return this._lifeExpectancy.k;
  }
}
