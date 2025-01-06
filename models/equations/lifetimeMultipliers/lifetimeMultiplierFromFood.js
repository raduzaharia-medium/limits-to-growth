import { Table } from "../../table.js";

export class LifetimeMultiplierFromFood extends Table {
  constructor(subsistenceFoodPerCapitaK) {
    super("lifetimeMultiplierFromFood", 20, [0, 1, 1.2, 1.3, 1.35, 1.4], 0, 5, 1);

    this.subsistenceFoodPerCapitaK = subsistenceFoodPerCapitaK;
    this.dependencies = ["foodPerCapita"];
  }

  set foodPerCapita(value) {
    this._foodPerCapita = value;
  }

  updateFn() {
    return this._foodPerCapita.k / this.subsistenceFoodPerCapitaK;
  }
}
