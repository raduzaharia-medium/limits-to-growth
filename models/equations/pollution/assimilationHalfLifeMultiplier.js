import { Table } from "../../table.js";

export class AssimilationHalfLifeMultiplier extends Table {
  constructor() {
    super("assimilationHalfLifeMultiplier", 145, [1, 11, 21, 31, 41], 1, 1001, 250);

    this.dependencies = ["indexOfPersistentPollution"];
  }

  set indexOfPersistentPollution(value) {
    this._indexOfPersistentPollution = value;
  }

  updateFn() {
    return this._indexOfPersistentPollution.k;
  }
}
