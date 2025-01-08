import { Table } from "../../../table.js";

export class IndicatedFoodPerCapitaBefore extends Table {
  constructor() {
    super("indicatedFoodPerCapitaBefore", 90, [230, 480, 690, 850, 970, 1070, 1150, 1210, 1250], 0, 1600, 200);

    this.units = "kilograms per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k;
  }
}
