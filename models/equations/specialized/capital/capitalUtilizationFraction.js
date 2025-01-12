import { Table } from "../../table.js";

export class CapitalUtilizationFraction extends Table {
  constructor() {
    super("capitalUtilizationFraction", 83, [1.0, 0.9, 0.7, 0.3, 0.1, 0.1], 1, 11, 2);

    this.dependencies = ["laborUtilizationFractionDelayed"];
    this.plottable = true;
    this.sequenceNumber = 28;
  }

  set laborUtilizationFractionDelayed(value) {
    this._laborUtilizationFractionDelayed = value;
  }

  updateFn(t, dt) {
    return this._laborUtilizationFractionDelayed.k || 1.0; // to break circularity
  }
}
