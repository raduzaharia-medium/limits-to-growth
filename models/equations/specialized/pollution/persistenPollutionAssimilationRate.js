import { Rate } from "../../rate.js";

export class PersistenPollutionAssimilationRate extends Rate {
  constructor() {
    super("persistenPollutionAssimilationRate", 144);

    this.units = "pollution units per year";
    this.plottable = true;
  }

  set persistentPollution(value) {
    this._persistentPollution = value;
  }

  set assimilationHalfLife(value) {
    this._assimilationHalfLife = value;
  }

  updateFn(t, dt) {
    return this._persistentPollution.k / (this._assimilationHalfLife.k * 1.4);
  }
}
