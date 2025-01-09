import { Table } from "../../../../table.js";

export class LandFertilityRegenerationTime extends Table {
  constructor() {
    super("landFertilityRegenerationTime", 125, [20, 13, 8, 4, 2, 2], 0, 0.1, 0.02);

    this.units = "years";
    this.dependencies = ["fractionOfInputsAllocatedToLandMaintenance"];
    this.sequenceNumber = 83;
  }

  set fractionOfInputsAllocatedToLandMaintenance(value) {
    this._fractionOfInputsAllocatedToLandMaintenance = value;
  }

  updateFn() {
    return this._fractionOfInputsAllocatedToLandMaintenance.k;
  }
}
