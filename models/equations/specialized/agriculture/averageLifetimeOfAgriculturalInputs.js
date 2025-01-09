import { Aux } from "../../aux.js";

export class AverageLifetimeOfAgriculturalInputs extends Aux {
  constructor(policyYear) {
    super("averageLifetimeOfAgriculturalInputs", 100);

    this.units = "years";
    this.before = 2;
    this.after = 2;
    this.policyYear = policyYear;
    this.sequenceNumber = 16;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
