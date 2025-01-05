import { Level } from "../level.js";

export class Population15To44 extends Level {
  constructor(startTime, dt) {
    super("population15To44", 6, 7.0e8, startTime);

    this.units = "persons";
    this.dt = dt;
  }

  set maturationsPerYear14to15(value) {
    this._maturationsPerYear14to15 = value;
  }

  set deathsPerYear15To44(value) {
    this._deathsPerYear15To44 = value;
  }

  set maturationsPerYear44to45(value) {
    this._maturationsPerYear44to45 = value;
  }

  updateFn() {
    return this.j + this.dt * (this._maturationsPerYear14to15.j - this._deathsPerYear15To44.j - this._maturationsPerYear44to45.j);
  }
}
