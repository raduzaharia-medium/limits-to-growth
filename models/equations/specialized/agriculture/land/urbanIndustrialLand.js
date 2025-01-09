import { Level } from "../../../level.js";

export class UrbanIndustrialLand extends Level {
  constructor(startTime) {
    super("urbanIndustrialLand", 120, 8.2e6, startTime);

    this.units = "hectares";
    this.plottable = true;

    this.dependencies = ["landRemovalForUrbanIndustrialUse"];
  }

  set landRemovalForUrbanIndustrialUse(value) {
    this._landRemovalForUrbanIndustrialUse = value;
  }

  updateFn(t, dt) {
    return this.j + dt * this._landRemovalForUrbanIndustrialUse.j;
  }
}
