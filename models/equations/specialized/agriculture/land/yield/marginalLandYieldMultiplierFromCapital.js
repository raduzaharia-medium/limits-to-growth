import { Table } from "../../../../table.js";

export class MarginalLandYieldMultiplierFromCapital extends Table {
  constructor() {
    super(
      "marginalLandYieldMultiplierFromCapital",
      111,
      [0.075, 0.03, 0.015, 0.011, 0.009, 0.008, 0.007, 0.006, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005],
      0,
      600,
      40
    );

    this.units = "hectares per dollar";
    this.dependencies = ["agriculturalInputsPerHectare"];
    this.sequenceNumber = 69;
  }

  set agriculturalInputsPerHectare(value) {
    this._agriculturalInputsPerHectare = value;
  }

  updateFn(t, dt) {
    return this._agriculturalInputsPerHectare.k;
  }
}
