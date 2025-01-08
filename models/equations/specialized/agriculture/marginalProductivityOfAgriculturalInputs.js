import { Aux } from "../../aux.js";

export class MarginalProductivityOfAgriculturalInputs extends Aux {
  constructor() {
    super("marginalProductivityOfAgriculturalInputs", 110);

    this.units = "kilograms per dollar";
    this.dependencies = ["averageLifetimeOfAgriculturalInputs", "landYield", "marginalLandYieldMultiplierFromCapital", "landYieldMultiplierFromCapital"];
  }

  set averageLifetimeOfAgriculturalInputsK(value) {
    this._averageLifetimeOfAgriculturalInputsK = value;
  }

  set landYield(value) {
    this._landYield = value;
  }

  set marginalLandYieldMultiplierFromCapital(value) {
    this._marginalLandYieldMultiplierFromCapital = value;
  }

  set landYieldMultiplierFromCapital(value) {
    this._landYieldMultiplierFromCapital = value;
  }

  updateFn() {
    return (
      this._averageLifetimeOfAgriculturalInputsK * this._landYield.k * (this._marginalLandYieldMultiplierFromCapital.k / this._landYieldMultiplierFromCapital.k)
    );
  }
}
