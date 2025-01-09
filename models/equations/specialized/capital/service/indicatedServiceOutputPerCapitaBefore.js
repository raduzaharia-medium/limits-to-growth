import { Table } from "../../../table.js";

export class IndicatedServiceOutputPerCapitaBefore extends Table {
  constructor() {
    super("indicatedServiceOutputPerCapitaBefore", 61, [40, 300, 640, 1000, 1220, 1450, 1650, 1800, 2000], 0, 1600, 200);

    this.units = "dollars per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
    this.sequenceNumber = 38;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn(t, dt) {
    return this._industrialOutputPerCapita.k;
  }
}
