import { Rate } from "../../rate.js";

export class NonRenewableResourceUsageRate extends Rate {
  constructor() {
    super("nonrenewableResourceUsageRate", 130);

    this.units = "resource units per year";
    this.plottable = true;
  }

  set population(value) {
    this._population = value;
  }

  set perCapitaResourceUsageMultiplier(value) {
    this._perCapitaResourceUsageMultiplier = value;
  }

  set nonRenewableResourceUsageFactor(value) {
    this._nonRenewableResourceUsageFactor = value;
  }

  updateFn(t, dt) {
    return this._population.k * this._perCapitaResourceUsageMultiplier.k * this._nonRenewableResourceUsageFactor.k;
  }
}
