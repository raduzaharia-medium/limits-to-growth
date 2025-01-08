import { Rate } from "../../../../rate.js";

export class LandErosionRate extends Rate {
  constructor() {
    super("landErosionRate", 116);

    this.units = "hectares per year";
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  set averageLifeOfLand(value) {
    this._averageLifeOfLand = value;
  }

  updateFn() {
    return this._arableLand.k / this._averageLifeOfLand.k;
  }
}
