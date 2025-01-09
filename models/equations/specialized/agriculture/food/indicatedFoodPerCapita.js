import { Aux } from "../../../aux.js";

export class IndicatedFoodPerCapita extends Aux {
  constructor(policyYear) {
    super("indicatedFoodPerCapita", 89);

    this.units = "kilograms per person-year";
    this.dependencies = ["indicatedFoodPerCapitaBefore", "indicatedFoodPerCapitaAfter"];
    this.policyYear;
    this.sequenceNumber = 76;
  }

  set indicatedFoodPerCapitaAfter(value) {
    this._indicatedFoodPerCapitaAfter = value;
  }

  set indicatedFoodPerCapitaBefore(value) {
    this._indicatedFoodPerCapitaBefore = value;
  }

  updateFn() {
    return clip(this._indicatedFoodPerCapitaAfter.k, this._indicatedFoodPerCapitaBefore.k, t, this.policyYear);
  }
}
