import { Aux } from "../../../aux.js";

export class FoodRatio extends Aux {
  constructor(subsistenceFoodPerCapitaK) {
    super("foodRatio", 127);

    this.dependencies = ["foodPerCapita"];
    this.subsistenceFoodPerCapitaK = subsistenceFoodPerCapitaK;
  }

  set foodPerCapita(value) {
    this._foodPerCapita = value;
  }

  updateFn() {
    return this._foodPerCapita.k / this.subsistenceFoodPerCapitaK;
  }
}
