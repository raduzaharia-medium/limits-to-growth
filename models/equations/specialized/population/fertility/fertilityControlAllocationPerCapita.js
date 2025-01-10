import { Aux } from "../../../aux.js";

export class FertilityControlAllocationPerCapita extends Aux {
  constructor() {
    super("fertilityControlAllocationPerCapita", 47);

    this.units = "dollars per person-year";
    this.dependencies = ["serviceOutputPerCapita", "fractionOfServicesAllocatedToFertilityControl"];
    this.plottable = true;
    this.sequenceNumber = 97;
  }

  set fractionOfServicesAllocatedToFertilityControl(value) {
    this._fractionOfServicesAllocatedToFertilityControl = value;
  }

  set serviceOutputPerCapita(value) {
    this._serviceOutputPerCapita = value;
  }

  updateFn(t, dt) {
    return this._fractionOfServicesAllocatedToFertilityControl.k * this._serviceOutputPerCapita.k;
  }
}
