import { Aux } from "../../aux.js";

export class FertilityControlAllocationPerCapita extends Aux {
  constructor() {
    super("fertilityControlAllocationPerCapita", 47);

    this.units = "dollars per person-year";
    this.dependencies = ["serviceOutputPerCapita", "fractionOfServicesAllocatedToFertilityControl"];
  }

  set fractionOfServicesAllocatedToFertilityControl(value) {
    this._fractionOfServicesAllocatedToFertilityControl = value;
  }

  set serviceOutputPerCapita(value) {
    this._serviceOutputPerCapita = value;
  }

  updateFn() {
    return this._fractionOfServicesAllocatedToFertilityControl.k * this._serviceOutputPerCapita.k;
  }
}
