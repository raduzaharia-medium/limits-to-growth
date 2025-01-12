import { Table } from "../../../table.js";

export class JobsPerIndustrialCapitalUnit extends Table {
  constructor() {
    super("jobsPerIndustrialCapitalUnit", 75, [0.00037, 0.00018, 0.00012, 0.00009, 0.00007, 0.00006], 50, 800, 150);

    this.units = "persons per dollar";
    this.dependencies = ["industrialOutputPerCapita"];
    this.plottable = true;
    this.sequenceNumber = 43;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn(t, dt) {
    return this._industrialOutputPerCapita.k;
  }
}
