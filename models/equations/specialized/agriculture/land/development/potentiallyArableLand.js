import { Level } from "../../../../level.js";

export class PotentiallyArableLand extends Level {
  constructor() {
    super("potentiallyArableLand", 86, 2.3e9);

    this.units = "hectares";
    this.plottable = true;

    this.dependencies = ["landDevelopmentRate"];
  }

  set landDevelopmentRate(value) {
    this._landDevelopmentRate = value;
  }

  updateFn(t, dt) {
    return this.j + dt * -this._landDevelopmentRate.j;
  }
}
