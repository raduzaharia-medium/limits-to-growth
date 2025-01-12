import { Aux } from "../../../aux.js";

export class FoodPerCapita extends Aux {
  constructor() {
    super("foodPerCapita", 88);

    this.units = "kilograms per person-year";
    this.dependencies = ["food", "population"];
    this.sequenceNumber = 73;
  }

  set food(value) {
    this._food = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn(t, dt) {
    return this._food.k / this._population.k;
  }
}
