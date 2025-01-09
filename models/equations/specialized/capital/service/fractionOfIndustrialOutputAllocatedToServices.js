import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class FractionOfIndustrialOutputAllocatedToServices extends Aux {
  constructor(policyYear) {
    super("fractionOfIndustrialOutputAllocatedToServices", 63);

    this.dependencies = ["fractionOfIndustrialOutputAllocatedToServicesBefore", "fractionOfIndustrialOutputAllocatedToServicesAfter"];
    this.policyYear = policyYear;
    this.plottable = true;
    this.sequenceNumber = 49;
  }

  set fractionOfIndustrialOutputAllocatedToServicesAfter(value) {
    this._fractionOfIndustrialOutputAllocatedToServicesAfter = value;
  }

  set fractionOfIndustrialOutputAllocatedToServicesBefore(value) {
    this._fractionOfIndustrialOutputAllocatedToServicesBefore = value;
  }

  updateFn(t, dt) {
    return clip(this._fractionOfIndustrialOutputAllocatedToServicesAfter.k, this._fractionOfIndustrialOutputAllocatedToServicesBefore.k, t, this.policyYear);
  }
}
