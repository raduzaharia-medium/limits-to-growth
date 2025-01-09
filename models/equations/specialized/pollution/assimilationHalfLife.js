import { Aux } from "../../aux.js";

export class AssimilationHalfLife extends Aux {
  constructor() {
    super("assimilationHalfLife", 146);

    this.units = "years";
    this.valueIn1970 = 1.5; // years
    this.dependencies = ["assimilationHalfLifeMultiplier"];
    this.plottable = true;
  }

  set assimilationHalfLifeMultiplier(value) {
    this._assimilationHalfLifeMultiplier = value;
  }

  updateFn() {
    return this._assimilationHalfLifeMultiplier.k * this.valueIn1970;
  }
}
