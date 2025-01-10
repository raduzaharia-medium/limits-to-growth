import { Level } from "../../../../level.js";

export class ArableLand extends Level {
  constructor() {
    super("arableLand", 85, 0.9e9);

    this.units = "hectares";
    this.color = "#513210";
    this.max = 3.0e9;

    this.dependencies = ["landDevelopmentRate", "landErosionRate", "landRemovalForUrbanIndustrialUse"];
  }

  set landDevelopmentRate(value) {
    this._landDevelopmentRate = value;
  }

  set landErosionRate(value) {
    this._landErosionRate = value;
  }

  set landRemovalForUrbanIndustrialUse(value) {
    this._landRemovalForUrbanIndustrialUse = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._landDevelopmentRate.j - this._landErosionRate.j - this._landRemovalForUrbanIndustrialUse.j);
  }
}
