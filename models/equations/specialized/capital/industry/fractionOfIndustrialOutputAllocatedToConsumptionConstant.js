import { Aux } from "../../../aux.js";

export class FractionOfIndustrialOutputAllocatedToConsumptionConstant extends Aux {
  constructor(policyYear) {
    super("fractionOfIndustrialOutputAllocatedToConsumptionConstant", 58);

    this.before = 0.43;
    this.after = 0.43;
    this.policyYear = policyYear;
    this.sequenceNumber = 15;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
