import { Table } from "../../../table.js";

export class UrbanIndustrialLandPerCapita extends Table {
  constructor() {
    // 2016-08-09: Neil S. Grant reported an error in the table of values
    // for urbanIndustrialLandPerCapita. The third element of the array
    // should be 0.015, not 0.15. Corrected.
    super("urbanIndustrialLandPerCapita", 117, [0.005, 0.008, 0.015, 0.025, 0.04, 0.055, 0.07, 0.08, 0.09], 0, 1600, 200);

    this.units = "hectares per person";
    this.dependencies = ["industrialOutputPerCapita"];
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k;
  }
}
