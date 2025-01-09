import { Aux } from "../../aux.js";

export class FractionOfCapitalAllocatedToObtainingResources extends Aux {
  constructor(policyYear) {
    super("fractionOfCapitalAllocatedToObtainingResources", 134);

    this.dependencies = ["fractionOfCapitalAllocatedToObtainingResourcesBefore", "fractionOfCapitalAllocatedToObtainingResourcesAfter"];
    this.policyYear = policyYear;
    this.plottable = true;
    this.sequenceNumber = 25;
  }

  set fractionOfCapitalAllocatedToObtainingResourcesAfter(value) {
    this._fractionOfCapitalAllocatedToObtainingResourcesAfter = value;
  }

  set fractionOfCapitalAllocatedToObtainingResourcesBefore(value) {
    this._fractionOfCapitalAllocatedToObtainingResourcesBefore = value;
  }

  updateFn() {
    return clip(this._fractionOfCapitalAllocatedToObtainingResourcesAfter.k, this._fractionOfCapitalAllocatedToObtainingResourcesBefore.k, t, this.policyYear);
  }
}
