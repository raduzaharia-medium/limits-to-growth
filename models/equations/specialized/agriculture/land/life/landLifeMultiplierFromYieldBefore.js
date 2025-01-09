import { Table } from "../../../../table.js";

export class LandLifeMultiplierFromYieldBefore extends Table {
  constructor(inherentLandFertilityK) {
    super("landLifeMultiplierFromYieldBefore", 114, [1.2, 1, 0.63, 0.36, 0.16, 0.055, 0.04, 0.025, 0.015, 0.01], 0, 9, 1);

    this.dependencies = ["landYield"];
    this.inherentLandFertilityK = inherentLandFertilityK;
    this.sequenceNumber = 101;
  }

  set landYield(value) {
    this._landYield = value;
  }

  updateFn(t, dt) {
    return this._landYield.k / this.inherentLandFertilityK;
  }
}
