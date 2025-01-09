import { Rate } from "../../../../rate.js";

export class LandFertilityRegeneration extends Rate {
  constructor() {
    super("landFertilityRegeneration", 124);

    this.units = "kilograms per hectare-year-year";
    this.plottable = true;
  }

  set inherentLandFertilityK(value) {
    this._inherentLandFertilityK = value;
  }

  set landFertility(value) {
    this._landFertility = value;
  }

  set landFertilityRegenerationTime(value) {
    this._landFertilityRegenerationTime = value;
  }

  updateFn(t, dt) {
    return (this._inherentLandFertilityK - this._landFertility.k) / this._landFertilityRegenerationTime.k;
  }
}
