import { Level } from "../../level.js";

export class PersistentPollution extends Level {
  constructor(startTime) {
    super("persistentPollution", 142, 2.5e7, startTime);

    this.units = "pollution units";
    this.dependencies = ["persistenPollutionAppearanceRate", "persistenPollutionAssimilationRate"];
  }

  set persistenPollutionAppearanceRate(value) {
    this._persistenPollutionAppearanceRate = value;
  }

  set persistenPollutionAssimilationRate(value) {
    this._persistenPollutionAssimilationRate = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._persistenPollutionAppearanceRate.j - this._persistenPollutionAssimilationRate.j);
  }
}
