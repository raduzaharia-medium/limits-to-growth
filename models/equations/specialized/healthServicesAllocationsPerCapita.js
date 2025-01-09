import { Table } from "../table.js";

export class HealthServicesAllocationPerCapita extends Table {
  constructor() {
    super("healthServicesAllocationsPerCapita", 21, [0, 20, 50, 95, 140, 175, 200, 220, 230], 0, 2000, 250);

    this.units = "dollars per person-year";
    this.dependencies = ["serviceOutputPerCapita"];
    this.plottable = true;
    this.sequenceNumber = 52;
  }

  set serviceOutputPerCapita(value) {
    this._serviceOutputPerCapita = value;
  }

  updateFn() {
    return this._serviceOutputPerCapita.k;
  }
}
