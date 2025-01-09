import { Table } from "../../../table.js";

export class IndicatedFoodPerCapitaBefore extends Table {
  constructor() {
    super("indicatedFoodPerCapitaBefore", 90, [230, 480, 690, 850, 970, 1070, 1150, 1210, 1250], 0, 1600, 200);

    this.units = "kilograms per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
    this.sequenceNumber = 74;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn(t, dt) {
    return this._industrialOutputPerCapita.k;
  }
}
