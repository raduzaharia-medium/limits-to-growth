import { Delay3 } from "../../delay.js";

export class FertilityControlFacilitiesPerCapita extends Delay3 {
  constructor(healthServicesImpactDelayK) {
    super("fertilityControlFacilitiesPerCapita", 46, healthServicesImpactDelayK);

    this.units = "dollars per person-year";
    this.dependencies = ["fertilityControlAllocationPerCapita"];
    this.sequenceNumber = 98;
  }

  set fertilityControlAllocationPerCapita(value) {
    this._fertilityControlAllocationPerCapita = value;
  }

  initFn = function () {
    return this._fertilityControlAllocationPerCapita;
  };
}
