import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class AverageLifetimeOfServiceCapital extends Aux {
  constructor(policyYear) {
    super("averageLifetimeOfServiceCapital", 69);

    this.units = "years";
    this.before = 20; // years
    this.after = 20; // years
    this.sequenceNumber = 5;
    this.policyYear = policyYear;
  }

  updateFn(t, dt) {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
