import { Aux } from "../../../aux.js";

export class ServiceCapitalOutputRatio extends Aux {
  constructor(policyYear) {
    super("serviceCapitalOutputRatio", 72);

    this.units = "years";
    this.before = 1;
    this.after = 1;
    this.policyYear = policyYear;
    this.plottable = true;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
