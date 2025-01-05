import { Level } from "../level.js";

export class Population65AndOver extends Level {
  constructor(startTime, dt) {
    super("population65AndOver", 14, 6.0e7, startTime);

    this.units = "persons";
    this.dt = dt;
  }

  set maturationsPerYear64To65(value) {
    this._maturationsPerYear64to65 = value;
  }

  set deathsPerYear65AndOver(value) {
    this._deathsPerYear65AndOver = value;
  }

  updateFn() {
    return this.j + this.dt * (this._maturationsPerYear64to65.j - this._deathsPerYear65AndOver.j);
  }
}
