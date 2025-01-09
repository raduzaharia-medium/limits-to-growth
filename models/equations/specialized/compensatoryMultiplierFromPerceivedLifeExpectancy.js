import { Table } from "../table.js";

export class CompensatoryMultiplierFromPerceivedLifeExpectancy extends Table {
  constructor() {
    super("compensatoryMultiplierFromPerceivedLifeExpectancy", 36, [3.0, 2.1, 1.6, 1.4, 1.3, 1.2, 1.1, 1.05, 1.0], 0, 80, 10);

    this.dependencies = ["perceivedLifeExpectancy"];
    this.sequenceNumber = 92;
  }

  set perceivedLifeExpectancy(value) {
    this._perceivedLifeExpectancy = value;
  }

  updateFn() {
    return this._perceivedLifeExpectancy.k;
  }
}
