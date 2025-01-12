import { Rate } from "../../../rate.js";

export class MaturationsPerYear44To45 extends Rate {
  constructor() {
    super("maturationsPerYear44to45", 9);

    this.units = "persons per year";
    this.dependencies = ["population15To44", "mortality15To44"];
  }

  set population15To44(value) {
    this._population15To44 = value;
  }

  set mortality15To44(value) {
    this._mortality15To44 = value;
  }

  updateFn(t, dt) {
    return (this._population15To44.k * (1 - this._mortality15To44.k)) / 30;
  }
}
