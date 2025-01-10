import { Aux } from "../../../aux.js";

export class LifetimeMultiplierFromCrowding extends Aux {
  constructor() {
    super("lifetimeMultiplierFromCrowding", 28);

    this.plottable = true;
    this.sequenceNumber = 2;

    this.dependencies = ["crowdingMultiplierFromIndustrialization", "fractionOfPopulationUrban"];
  }

  set crowdingMultiplierFromIndustrialization(value) {
    this._crowdingMultiplierFromIndustrialization = value;
  }

  set fractionOfPopulationUrban(value) {
    this._fractionOfPopulationUrban = value;
  }

  updateFn(t, dt) {
    return 1 - this._crowdingMultiplierFromIndustrialization.k * this._fractionOfPopulationUrban.k;
  }
}
