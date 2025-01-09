import { Aux } from "../../../aux.js";

export class IndustrialCapitalOutputRatio extends Aux {
  constructor(policyYear) {
    super("industrialCapitalOutputRatio", 51);

    this.units = "years";
    this.before = 3;
    this.after = 3;
    this.policyYear = policyYear;
    this.plottable = true;
    this.sequenceNumber = 3;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
