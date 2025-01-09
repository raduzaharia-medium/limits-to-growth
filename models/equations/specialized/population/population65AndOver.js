import { Level } from "../../level.js";

export class Population65AndOver extends Level {
  constructor(startTime) {
    super("population65AndOver", 14, 6.0e7, startTime);

    this.units = "persons";
    this.dependencies = ["maturationsPerYear64To65", "deathsPerYear65AndOver"];
  }

  set maturationsPerYear64To65(value) {
    this._maturationsPerYear64to65 = value;
  }

  set deathsPerYear65AndOver(value) {
    this._deathsPerYear65AndOver = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._maturationsPerYear64to65.j - this._deathsPerYear65AndOver.j);
  }
}
