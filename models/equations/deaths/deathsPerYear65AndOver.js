import { Rate } from "../../rate.js";

export class DeathsPerYear65AndOver extends Rate {
  constructor() {
    super("deathsPerYear65AndOver", 15);

    this.units = "persons per year";
  }

  set population65AndOver(value) {
    this._population65AndOver = value;
  }

  set mortality65AndOver(value) {
    this._mortality65AndOver = value;
  }

  updateFn() {
    return this._population65AndOver.k * this._mortality65AndOver.k;
  }
}
