import { Aux } from "../../aux.js";

export class LandYield extends Aux {
  constructor() {
    super("landYield", 103);

    this.units = "kilograms per hectare-year";
    this.plotColor = "#185103";
    this.plotMin = 0;
    this.plotMax = 3000;
    this.dependencies = ["landYieldFactor", "landYieldMultiplierFromCapital", "landYieldMultiplierFromAirPollution"];
  }

  set landYieldFactor(value) {
    this._landYieldFactor = value;
  }

  set landFertility(value) {
    this._landFertility = value;
  }

  set landYieldMultiplierFromCapital(value) {
    this._landYieldMultiplierFromCapital = value;
  }

  set landYieldMultiplierFromAirPollution(value) {
    this._landYieldMultiplierFromAirPollution = value;
  }

  updateFn() {
    return this._landYieldFactor.k * this._landFertility.k * this._landYieldMultiplierFromCapital.k * this._landYieldMultiplierFromAirPollution.k;
  }
}
