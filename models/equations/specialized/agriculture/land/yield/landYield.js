import { Aux } from "../../../../aux.js";

export class LandYield extends Aux {
  constructor() {
    super("landYield", 103);

    this.units = "kilograms per hectare-year";
    this.plotColor = "#185103";
    this.plotMin = 0;
    this.plotMax = 3000;
    this.dependencies = ["landYieldFactor", "landYieldMultiplierFromCapital", "landYieldMultiplierFromAirPollution", "landFertility"];
    this.sequenceNumber = 67;
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

  updateFn(t, dt) {
    return this._landYieldFactor.k * this._landFertility.k * this._landYieldMultiplierFromCapital.k * this._landYieldMultiplierFromAirPollution.k;
  }
}
