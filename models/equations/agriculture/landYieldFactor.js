import { Aux } from "../../aux.js";

export class LandYieldFactor extends Aux {
  constructor(policyYear) {
    super("landYieldFactor", 104);

    this.before = 1;
    this.after = 1;
    this.policyYear = policyYear;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
