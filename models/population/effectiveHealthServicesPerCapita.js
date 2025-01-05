import { Smooth } from "../smooth.js";

export class EffectiveHealthServicesPerCapita extends Smooth {
  constructor(effectiveHealthServicesPerCapitaImpactDelay) {
    super("effectiveHealthServicesPerCapita", 22, effectiveHealthServicesPerCapitaImpactDelay);

    this.units = "dollars per person-year";
    this.dependencies = ["healthServicesAllocationsPerCapita"];
  }

  set healthServicesAllocationsPerCapita(value) {
    this._healthServicesAllocationsPerCapita = value;
  }

  initFn() {
    return this._healthServicesAllocationsPerCapita;
  }
}
