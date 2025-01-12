import { Rate } from "../../../rate.js";

export class MaturationsPerYear64To65 extends Rate {
  constructor() {
    super("maturationsPerYear64to65", 13);

    this.units = "persons per year";
    this.dependencies = ["population45To64", "mortality45To64"];
  }

  set population45To64(value) {
    this._population45To64 = value;
  }

  set mortality45To64(value) {
    this._mortality45To64 = value;
  }

  updateFn(t, dt) {
    return (this._population45To64.k * (1 - this._mortality45To64.k)) / 20;
  }
}
