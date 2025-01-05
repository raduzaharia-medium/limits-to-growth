import { Rate } from "../rate.js";

export class DeathsPerYear15To44 extends Rate {
  constructor() {
    super("deathsPerYear15To44", 7);

    this.units = "persons per year";
  }

  set population15To44(value) {
    this._population15To44 = value;
  }

  set mortality15To44(value) {
    this._mortality15To44 = value;
  }

  updateFn() {
    return this._population15To44.k * this._mortality15To44.k;
  }
}