import { Aux } from "../../../../aux.js";

export class AverageLifeOfLand extends Aux {
  constructor() {
    super("averageLifeOfLand", 112);

    this.units = "years";
    this.normal = 6000; // years
    this.dependencies = ["landLifeMultiplierFromYield"];
    this.plottable = true;
    this.sequenceNumber = 104;
  }

  set landLifeMultiplierFromYield(value) {
    this._landLifeMultiplierFromYield = value;
  }

  updateFn(t, dt) {
    return this.normal * this._landLifeMultiplierFromYield.k;
  }
}
