import { Aux } from "../aux.js";

export class MaxTotalFertility extends Aux {
  constructor() {
    super("maxTotalFertility", 33);

    this.dependencies = ["fecundityMultiplier"];
    this.normal = 12; // dimensionless
  }

  set fecundityMultiplier(value) {
    this._fecundityMultiplier = value;
  }

  updateFn() {
    return this.normal * this._fecundityMultiplier.k;
  }
}
