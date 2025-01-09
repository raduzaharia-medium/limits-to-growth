import { Level } from "../../../level.js";

export class UrbanIndustrialLand extends Level {
  constructor(startTime) {
    super("urbanIndustrialLand", 120, 8.2e6, startTime);

    this.units = "hectares";
    this.plottable = true;
  }

  set landRemovalForUrbanIndustrialUse(value) {
    this._landRemovalForUrbanIndustrialUse = value;
  }

  updateFn() {
    return this.j + dt * this._landRemovalForUrbanIndustrialUse.j;
  }
}
