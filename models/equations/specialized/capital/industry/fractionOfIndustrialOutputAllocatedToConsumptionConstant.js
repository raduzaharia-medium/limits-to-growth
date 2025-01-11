import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class FractionOfIndustrialOutputAllocatedToConsumptionConstant extends Aux {
  constructor(policyYear, before, after) {
    super("fractionOfIndustrialOutputAllocatedToConsumptionConstant", 58);

    this.before = before;
    this.after = after;
    this.policyYear = policyYear;
    this.sequenceNumber = 15;
  }

  updateFn(t, dt) {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
