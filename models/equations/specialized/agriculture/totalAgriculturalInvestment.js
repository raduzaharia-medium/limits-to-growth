import { Aux } from "../../aux.js";

export class TotalAgriculturalInvestment extends Aux {
  constructor() {
    super("totalAgriculturalInvestment", 92);

    this.units = "dollars per year";
    this.dependencies = ["industrialOutput", "fractionOfIndustrialOutputAllocatedToAgriculture"];
    this.plottable = true;
    this.sequenceNumber = 80;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  set fractionOfIndustrialOutputAllocatedToAgriculture(value) {
    this._fractionOfIndustrialOutputAllocatedToAgriculture = value;
  }

  updateFn() {
    return this._industrialOutput.k * this._fractionOfIndustrialOutputAllocatedToAgriculture.k;
  }
}
