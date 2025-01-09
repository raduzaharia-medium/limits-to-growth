import { Aux } from "../../aux.js";

export class AgriculturalInputsPerHectare extends Aux {
  constructor() {
    super("agriculturalInputsPerHectare", 101);

    this.units = "dollars per hectare-year";
    this.dependencies = ["agriculturalInputs", "fractionOfInputsAllocatedToLandMaintenance"];
    this.plottable = true;
  }

  set agriculturalInputs(value) {
    this._agriculturalInputs = value;
  }

  set fractionOfInputsAllocatedToLandMaintenance(value) {
    this._fractionOfInputsAllocatedToLandMaintenance = value;
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  updateFn() {
    return (this._agriculturalInputs.k * (1 - this._fractionOfInputsAllocatedToLandMaintenance.k)) / this._arableLand.k;
  }
}
