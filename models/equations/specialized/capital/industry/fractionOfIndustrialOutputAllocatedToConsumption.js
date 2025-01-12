import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class FractionOfIndustrialOutputAllocatedToConsumption extends Aux {
  constructor() {
    super("fractionOfIndustrialOutputAllocatedToConsumption", 57);

    this.dependencies = ["fractionOfIndustrialOutputAllocatedToConsumptionVariable", "fractionOfIndustrialOutputAllocatedToConsumptionConstant"];
    this.industrialEquilibriumTime = 4000; // year
    this.sequenceNumber = 42;
  }

  set fractionOfIndustrialOutputAllocatedToConsumptionVariable(value) {
    this._fractionOfIndustrialOutputAllocatedToConsumptionVariable = value;
  }

  set fractionOfIndustrialOutputAllocatedToConsumptionConstant(value) {
    this._fractionOfIndustrialOutputAllocatedToConsumptionConstant = value;
  }

  updateFn(t, dt) {
    return clip(
      this._fractionOfIndustrialOutputAllocatedToConsumptionVariable.k,
      this._fractionOfIndustrialOutputAllocatedToConsumptionConstant.k,
      t,
      this.industrialEquilibriumTime
    );
  }
}
