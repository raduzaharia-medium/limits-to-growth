import { Table } from "../../../../table.js";

export class FractionOfInputsAllocatedToLandMaintenance extends Table {
  constructor() {
    super("fractionOfInputsAllocatedToLandMaintenance", 126, [0, 0.04, 0.07, 0.09, 0.1], 0, 4, 1);

    this.dependencies = ["perceivedFoodRatio"];
    this.plottable = true;
  }

  set perceivedFoodRatio(value) {
    this._perceivedFoodRatio = value;
  }

  updateFn() {
    return this._perceivedFoodRatio.k;
  }
}
