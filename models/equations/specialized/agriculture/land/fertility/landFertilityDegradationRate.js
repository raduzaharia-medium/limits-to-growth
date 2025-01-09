import { Table } from "../../../../table.js";

export class LandFertilityDegradationRate extends Table {
  constructor() {
    super("landFertilityDegradationRate", 122, [0, 0.1, 0.3, 0.5], 0, 30, 10);

    this.units = "inverse years";
    this.dependencies = ["indexOfPersistentPollution"];
    this.plottable = true;
    this.sequenceNumber = 27;
  }

  set indexOfPersistentPollution(value) {
    this._indexOfPersistentPollution = value;
  }

  updateFn(t, dt) {
    return this._indexOfPersistentPollution.k;
  }
}
