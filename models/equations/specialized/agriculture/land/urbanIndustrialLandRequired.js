import { Aux } from "../../../aux.js";

export class UrbanIndustrialLandRequired extends Aux {
  constructor() {
    super("urbanIndustrialLandRequired", 118);

    this.units = "hectares";
    this.dependencies = ["urbanIndustrialLandPerCapita", "population"];
    this.sequenceNumber = 106;
  }

  set urbanIndustrialLandPerCapita(value) {
    this._urbanIndustrialLandPerCapita = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn(t, dt) {
    return this._urbanIndustrialLandPerCapita.k * this._population.k;
  }
}
