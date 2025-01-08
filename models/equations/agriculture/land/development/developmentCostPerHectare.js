import { Table } from "../../../../table.js";

export class DevelopmentCostPerHectare extends Table {
  constructor() {
    super("developmentCostPerHectare", 97, [100000, 7400, 5200, 3500, 2400, 1500, 750, 300, 150, 75, 50], 0, 1.0, 0.1);

    this.units = "dollars per hectare";
  }

  set potentiallyArableLand(value) {
    this._potentiallyArableLand = value;
  }

  set potentiallyArableLandTotal(value) {
    this._potentiallyArableLandTotal = value;
  }

  updateFn() {
    return this._potentiallyArableLand.k / this._potentiallyArableLandTotal;
  }
}
