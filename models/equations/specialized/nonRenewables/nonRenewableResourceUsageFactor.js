import { Aux } from "../../aux.js";

export class NonRenewableResourceUsageFactor extends Aux {
  constructor(policyYear) {
    super("nonrenewableResourceUsageFactor", 131);

    this.before = 1;
    this.after = 1;
    this.policyYear = policyYear;
    this.sequenceNumber = 11;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
