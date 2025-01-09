import { Table } from "../../../table.js";

export class IndicatedServiceOutputPerCapitaAfter extends Table {
  constructor() {
    super("indicatedServiceOutputPerCapitaAfter", 62, [40, 300, 640, 1000, 1220, 1450, 1650, 1800, 2000], 0, 1600, 200);

    this.units = "dollars per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
    this.sequenceNumber = 39;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k;
  }
}
