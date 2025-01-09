import { Delay3 } from "../../delay.js";

export class PersistenPollutionAppearanceRate extends Delay3 {
  constructor(persistentPollutionTransmissionDelayK) {
    super("persistenPollutionAppearanceRate", 141, persistentPollutionTransmissionDelayK);

    this.units = "pollution units per year";
    this.qType = "Rate";
    this.plottable = true;
  }

  set persistentPollutionGenerationRate(value) {
    this._persistentPollutionGenerationRate = value;
  }

  initFn() {
    return this._persistentPollutionGenerationRate;
  }
}
