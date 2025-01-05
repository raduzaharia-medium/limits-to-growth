import { Rate } from "../rate.js";

export class DeathsPerYear45To64 extends Rate {
  constructor() {
    super("deathsPerYear45To64", 11);

    this.units = "persons per year";
  }

  set population45To64(value) {
    this._population45To64 = value;
  }

  set mortality45To64(value) {
    this._mortality45To64 = value;
  }

  updateFn() {
    return this._population45To64.k * this._mortality45To64.k;
  }
}
