import { clip } from "../../../../tools.js";
import { Aux } from "../../aux.js";

export class FractionOfIndustrialOutputAllocatedToAgriculture extends Aux {
  constructor(policyYear) {
    super("fractionOfIndustrialOutputAllocatedToAgriculture", 93);

    this.dependencies = ["fractionOfIndustrialOutputAllocatedToAgricultureBefore", "fractionOfIndustrialOutputAllocatedToAgricultureAfter"];
    this.policyYear = policyYear;
    this.plottable = true;
    this.sequenceNumber = 79;
  }

  set fractionOfIndustrialOutputAllocatedToAgricultureAfter(value) {
    this._fractionOfIndustrialOutputAllocatedToAgricultureAfter = value;
  }

  set fractionOfIndustrialOutputAllocatedToAgricultureBefore(value) {
    this._fractionOfIndustrialOutputAllocatedToAgricultureBefore = value;
  }

  updateFn(t, dt) {
    return clip(
      this._fractionOfIndustrialOutputAllocatedToAgricultureAfter.k,
      this._fractionOfIndustrialOutputAllocatedToAgricultureBefore.k,
      t,
      this.policyYear
    );
  }
}
