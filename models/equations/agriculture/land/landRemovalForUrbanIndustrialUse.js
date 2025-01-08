import { Rate } from "../../../rate.js";

export class LandRemovalForUrbanIndustrialUse extends Rate {
  constructor() {
    super("landRemovalForUrbanIndustrialUse", 119);

    this.units = "hectares per year";
    this.developmentTime = 10; // years
  }

  set urbanIndustrialLand(value) {
    this._urbanIndustrialLand = value;
  }

  set urbanIndustrialLandRequired(value) {
    this._urbanIndustrialLandRequired = value;
  }

  updateFn() {
    return Math.max(0, (this._urbanIndustrialLandRequired.k - this._urbanIndustrialLand.k) / this.developmentTime);
  }
}