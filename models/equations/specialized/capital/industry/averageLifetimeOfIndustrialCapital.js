import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class AverageLifetimeOfIndustrialCapital extends Aux {
  constructor(policyYear) {
    super("averageLifetimeOfIndustrialCapital", 54);

    this.units = "years";
    this.before = 14;
    this.after = 14;
    this.policyYear = policyYear;
    this.sequenceNumber = 4;
  }

  updateFn(t, dt) {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
