import { Aux } from "../../aux.js";

export class MaxTotalFertility extends Aux {
  constructor() {
    super("maxTotalFertility", 33);

    this.dependencies = ["fecundityMultiplier"];
    this.normal = 12; // dimensionless
    this.sequenceNumber = 93;
  }

  set fecundityMultiplier(value) {
    this._fecundityMultiplier = value;
  }

  updateFn(t, dt) {
    return this.normal * this._fecundityMultiplier.k;
  }
}
