import { Level } from "../../../../level.js";

export class LandFertility extends Level {
  constructor(startTime) {
    super("landFertility", 121, 600, startTime);

    this.units = "kilograms per hectare-year";
    this.plottable = true;

    this.dependencies = ["landFertilityDegradation", "landFertilityRegeneration"];
  }

  set landFertilityDegradation(value) {
    this._landFertilityDegradation = value;
  }

  set landFertilityRegeneration(value) {
    this._landFertilityRegeneration = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._landFertilityRegeneration.j - this._landFertilityDegradation.j);
  }
}
