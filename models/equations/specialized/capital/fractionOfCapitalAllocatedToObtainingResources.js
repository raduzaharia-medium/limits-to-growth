import { Aux } from "../../aux.js";

export class FractionOfCapitalAllocatedToObtainingResources extends Aux {
  constructor(policyYear) {
    super("fractionOfCapitalAllocatedToObtainingResources", 134);

    this.dependencies = ["fractionOfCapitalAllocatedToObtainingResourcesBefore", "fractionOfCapitalAllocatedToObtainingResourcesAfter"];
    this.policyYear = policyYear;
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
