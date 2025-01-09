import { Rate } from "../../rate.js";

export class PersistentPollutionGenerationRate extends Rate {
  constructor() {
    super("persistentPollutionGenerationRate", 137);

    this.units = "pollution units per year";
    this.plottable = true;
  }

  set persistentPollutionGeneratedByIndustrialOutput(value) {
    this._persistentPollutionGeneratedByIndustrialOutput = value;
  }

  set persistentPollutionGeneratedByAgriculturalOutput(value) {
    this._persistentPollutionGeneratedByAgriculturalOutput = value;
  }

  set persistentPollutionGenerationFactor(value) {
    this._persistentPollutionGenerationFactor = value;
  }

  updateFn(t, dt) {
    return (
      (this._persistentPollutionGeneratedByIndustrialOutput.k + this._persistentPollutionGeneratedByAgriculturalOutput.k) *
      this._persistentPollutionGenerationFactor.k
    );
  }
}
