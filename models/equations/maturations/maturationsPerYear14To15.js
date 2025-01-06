import { Rate } from "../../rate.js";

export class MaturationsPerYear14To15 extends Rate {
  constructor() {
    super("maturationsPerYear14To15", 5);

    this.units = "persons per year";
  }

  set population0To14(value) {
    this._population0To14 = value;
  }

  set mortality0To14(value) {
    this._mortality0To14 = value;
  }

  updateFn() {
    return (this._population0To14.k * (1 - this._mortality0To14.k)) / 15;
  }
}
