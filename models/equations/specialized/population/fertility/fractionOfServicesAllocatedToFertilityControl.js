import { Table } from "../../../table.js";

export class FractionOfServicesAllocatedToFertilityControl extends Table {
  constructor() {
    super("fractionOfServicesAllocatedToFertilityControl", 48, [0.0, 0.005, 0.015, 0.025, 0.03, 0.035], 0, 10, 2);

    this.dependencies = ["needForFertilityControl"];
    this.plottable = true;
    this.sequenceNumber = 96;
  }

  set needForFertilityControl(value) {
    this._needForFertilityControl = value;
  }

  updateFn(t, dt) {
    return this._needForFertilityControl.k;
  }
}
