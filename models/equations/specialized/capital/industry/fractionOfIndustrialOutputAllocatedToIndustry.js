import { Aux } from "../../../aux.js";

export class FractionOfIndustrialOutputAllocatedToIndustry extends Aux {
  constructor() {
    super("fractionOfIndustrialOutputAllocatedToIndustry", 56);

    this.dependencies = [
      "fractionOfIndustrialOutputAllocatedToAgriculture",
      "fractionOfIndustrialOutputAllocatedToServices",
      "fractionOfIndustrialOutputAllocatedToConsumption",
    ];
    this.plottable = true;
    this.sequenceNumber = 112;
  }

  set fractionOfIndustrialOutputAllocatedToAgriculture(value) {
    this._fractionOfIndustrialOutputAllocatedToAgriculture = value;
  }

  set fractionOfIndustrialOutputAllocatedToServices(value) {
    this._fractionOfIndustrialOutputAllocatedToServices = value;
  }

  set fractionOfIndustrialOutputAllocatedToConsumption(value) {
    this._fractionOfIndustrialOutputAllocatedToConsumption = value;
  }

  updateFn() {
    return (
      1 -
      this._fractionOfIndustrialOutputAllocatedToAgriculture.k -
      this._fractionOfIndustrialOutputAllocatedToServices.k -
      this._fractionOfIndustrialOutputAllocatedToConsumption.k
    );
  }
}
