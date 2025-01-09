import { Rate } from "../../rate.js";

export class DeathsPerYear65AndOver extends Rate {
  constructor() {
    super("deathsPerYear65AndOver", 15);

    this.units = "persons per year";
    this.dependencies = ["population65AndOver", "mortality65AndOver"];
  }

  set population65AndOver(value) {
    this._population65AndOver = value;
  }

  set mortality65AndOver(value) {
    this._mortality65AndOver = value;
  }

  updateFn(t, dt) {
    return this._population65AndOver.k * this._mortality65AndOver.k;
  }
}
