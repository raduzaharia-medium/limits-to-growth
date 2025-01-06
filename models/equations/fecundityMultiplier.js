import { Table } from "../table.js";

export class FecundityMultiplier extends Table {
  constructor() {
    super("fecundityMultiplier", 34, [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0, 1.05, 1.1], 0, 80, 10);

    this.dependencies = ["lifeExpectancy"];
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  updateFn() {
    return this._lifeExpectancy.k;
  }
}
