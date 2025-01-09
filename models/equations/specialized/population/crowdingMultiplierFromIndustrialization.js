import { Table } from "../../table.js";

export class CrowdingMultiplierFromIndustrialization extends Table {
  constructor() {
    super("crowdingMultiplierFromIndustrialization", 27, [0.5, 0.05, -0.1, -0.08, -0.02, 0.05, 0.1, 0.15, 0.2], 0, 1600, 200);

    this.dependencies = ["industrialOutputPerCapita"];
    this.sequenceNumber = 37;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k;
  }
}
