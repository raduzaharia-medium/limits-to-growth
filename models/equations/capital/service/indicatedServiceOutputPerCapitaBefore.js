import { Table } from "../../../table.js";

export class IndicatedServiceOutputPerCapitaBefore extends Table {
  constructor() {
    super("indicatedServiceOutputPerCapitaBefore", 61, [40, 300, 640, 1000, 1220, 1450, 1650, 1800, 2000], 0, 1600, 200);

    this.units = "dollars per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k;
  }
}