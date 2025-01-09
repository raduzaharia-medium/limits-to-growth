import { Rate } from "../../rate.js";

export class DeathsPerYear0To14 extends Rate {
  constructor() {
    super("deathsPerYear0To14", 3);

    this.units = "persons per year";
  }

  set population0To14(value) {
    this._population0To14 = value;
  }

  set mortality0To14(value) {
    this._mortality0To14 = value;
  }

  updateFn(t, dt) {
    return this._population0To14.k * this._mortality0To14.k;
  }
}
