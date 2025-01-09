import { Table } from "../table.js";

export class PerCapitaResourceUsageMultiplier extends Table {
  constructor() {
    super("perCapitaResourceUsageMultiplier", 132, [0, 0.85, 2.6, 4.4, 5.4, 6.2, 6.8, 7, 7], 0, 1600, 200);

    this.units = "resource units per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
    this.plottable = true;
    this.sequenceNumber = 107;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k;
  }
}
