import { Table } from "../../table.js";

export class FractionOfIndustrialOutputAllocatedToAgricultureAfter extends Table {
  constructor() {
    super("fractionOfIndustrialOutputAllocatedToAgricultureAfter", 95, [0.4, 0.2, 0.1, 0.025, 0, 0], 0, 2.5, 0.5);

    this.dependencies = ["foodPerCapita", "indicatedFoodPerCapita"];
  }

  set foodPerCapita(value) {
    this._foodPerCapita = value;
  }

  set indicatedFoodPerCapita(value) {
    this._indicatedFoodPerCapita = value;
  }

  updateFn() {
    return this._foodPerCapita.k / this._indicatedFoodPerCapita.k;
  }
}
