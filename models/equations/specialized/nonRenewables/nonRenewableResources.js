import { Level } from "../../level.js";

export class NonRenewableResources extends Level {
  constructor(nonrenewableResourcesInitialK, startTime) {
    super("nonrenewableResources", 129, nonrenewableResourcesInitialK, startTime);

    this.units = "resource units";
  }

  set nonRenewableResourceUsageRate(value) {
    this._nonRenewableResourceUsageRate = value;
  }

  updateFn(t, dt) {
    return this.j + dt * -this._nonRenewableResourceUsageRate.j;
  }
}
