import { Rate } from "../../../../rate.js";

export class LandFertilityDegradation extends Rate {
  constructor() {
    super("landFertilityDegradation", 123);

    this.units = "kilograms per hectare-year-year";
  }

  set landFertility(value) {
    this._landFertility = value;
  }

  set landFertilityDegradationRate(value) {
    this._landFertilityDegradationRate = value;
  }

  updateFn() {
    return this._landFertility.k * this._landFertilityDegradationRate.k;
  }
}
