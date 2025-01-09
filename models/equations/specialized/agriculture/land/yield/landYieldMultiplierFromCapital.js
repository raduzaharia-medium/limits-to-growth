import { Table } from "../../../../table.js";

export class LandYieldMultiplierFromCapital extends Table {
  constructor() {
    super(
      "landYieldMultiplierFromCapital",
      102,
      [1, 3, 3.8, 4.4, 4.9, 5.4, 5.7, 6, 6.3, 6.6, 6.9, 7.2, 7.4, 7.6, 7.8, 8, 8.2, 8.4, 8.6, 8.8, 9, 9.2, 9.4, 9.6, 9.8, 10],
      0,
      1000,
      40
    );

    this.dependencies = ["agriculturalInputsPerHectare"];
    this.sequenceNumber = 63;
  }

  set agriculturalInputsPerHectare(value) {
    this._agriculturalInputsPerHectare = value;
  }

  updateFn() {
    return this._agriculturalInputsPerHectare.k;
  }
}
