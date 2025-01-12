import { Level } from "../../level.js";

export class Population45To64 extends Level {
  constructor(startTime) {
    super("population45To64", 10, 1.9e8, startTime);

    this.units = "persons";
    this.dependencies = ["maturationsPerYear44to45", "deathsPerYear45To64", "maturationsPerYear64to65"];
  }

  set maturationsPerYear44to45(value) {
    this._maturationsPerYear44to45 = value;
  }

  set deathsPerYear45To64(value) {
    this._deathsPerYear45To64 = value;
  }

  set maturationsPerYear64to65(value) {
    this._maturationsPerYear64to65 = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._maturationsPerYear44to45.j - this._deathsPerYear45To64.j - this._maturationsPerYear64to65.j);
  }
}
