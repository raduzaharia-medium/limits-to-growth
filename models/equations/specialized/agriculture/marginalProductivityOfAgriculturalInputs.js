import { Aux } from "../../aux.js";

export class MarginalProductivityOfAgriculturalInputs extends Aux {
  constructor() {
    super("marginalProductivityOfAgriculturalInputs", 110);

    this.units = "kilograms per dollar";
    this.dependencies = ["averageLifetimeOfAgriculturalInputs", "landYield", "marginalLandYieldMultiplierFromCapital", "landYieldMultiplierFromCapital"];
    this.sequenceNumber = 70;
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

  updateFn(t, dt) {
    return (
      this._averageLifetimeOfAgriculturalInputsK * this._landYield.k * (this._marginalLandYieldMultiplierFromCapital.k / this._landYieldMultiplierFromCapital.k)
    );
  }
}
