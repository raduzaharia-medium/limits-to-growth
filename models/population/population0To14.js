import { Level } from "../level.js";

export class Population0To14 extends Level {
  constructor(startTime, dt) {
    super("population0To14", 2, 6.5e8, startTime);

    this.units = "persons";
    this.dt = dt;
  }

  set birthsPerYear(value) {
    this._birthsPerYear = value;
  }

  set deathsPerYear0To14(value) {
    this._deathsPerYear0To14 = value;
  }

  set maturationsPerYear14to15(value) {
    this._maturationsPerYear14to15 = value;
  }

  updateFn() {
    return this.j + this.dt * (this._birthsPerYear.j - this._deathsPerYear0To14.j - this._maturationsPerYear14to15.j);
  }
}
