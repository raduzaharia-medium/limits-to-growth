import { Table } from "../../../table.js";

export class JobsPerServiceCapitalUnit extends Table {
  constructor() {
    super("jobsPerServiceCapitalUnit", 77, [0.0011, 0.0006, 0.00035, 0.0002, 0.00015, 0.00015], 50, 800, 150);

    this.units = "persons per dollar";
    this.dependencies = ["serviceOutputPerCapita"];
    this.plottable = true;
    this.sequenceNumber = 50;
  }

  set serviceOutputPerCapita(value) {
    this._serviceOutputPerCapita = value;
  }

  updateFn(t, dt) {
    return this._serviceOutputPerCapita.k;
  }
}
