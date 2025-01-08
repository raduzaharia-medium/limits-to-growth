import { Aux } from "../../aux.js";

export class FractionOfIndustrialOutputAllocatedToAgriculture extends Aux {
  constructor(policyYear) {
    super("fractionOfIndustrialOutputAllocatedToAgriculture", 93);

    this.dependencies = ["fractionOfIndustrialOutputAllocatedToAgricultureBefore", "fractionOfIndustrialOutputAllocatedToAgricultureAfter"];
    this.policyYear = policyYear;
  }

  set fractionOfIndustrialOutputAllocatedToAgricultureAfter(value) {
    this._fractionOfIndustrialOutputAllocatedToAgricultureAfter = value;
  }

  set fractionOfIndustrialOutputAllocatedToAgricultureBefore(value) {
    this._fractionOfIndustrialOutputAllocatedToAgricultureBefore = value;
  }

  updateFn() {
    return clip(
      this._fractionOfIndustrialOutputAllocatedToAgricultureAfter.k,
      this._fractionOfIndustrialOutputAllocatedToAgricultureBefore.k,
      t,
      this.policyYear
    );
  }
}
