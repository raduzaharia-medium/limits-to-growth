import { Aux } from "../../../../aux.js";

export class LandLifeMultiplierFromYield extends Aux {
  constructor(policyYear) {
    super("landLifeMultiplierFromYield", 113);

    this.dependencies = ["landLifeMultiplierFromYieldBefore", "landLifeMultiplierFromYieldAfter"];
    this.policyYear = policyYear;
    this.plottable = true;
    this.sequenceNumber = 103;
  }

  set landLifeMultiplierFromYieldAfter(value) {
    this._landLifeMultiplierFromYieldAfter = value;
  }

  set landLifeMultiplierFromYieldBefore(value) {
    this._landLifeMultiplierFromYieldBefore = value;
  }

  updateFn() {
    return clip(this._landLifeMultiplierFromYieldAfter.k, this._landLifeMultiplierFromYieldBefore.k, t, this.policyYear);
  }
}
