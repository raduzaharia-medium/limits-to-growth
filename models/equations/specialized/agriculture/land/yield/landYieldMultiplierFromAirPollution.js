import { clip } from "../../../../../../tools.js";
import { Aux } from "../../../../aux.js";

export class LandYieldMultiplierFromAirPollution extends Aux {
  constructor(policyYear) {
    super("landYieldMultiplierFromAirPollution", 105);

    this.dependencies = ["landYieldMultiplierFromAirPollutionBefore", "landYieldMultiplierFromAirPollutionAfter"];
    this.policyYear = policyYear;
    this.sequenceNumber = 66;
  }

  set landYieldMultiplierFromAirPollutionAfter(value) {
    this._landYieldMultiplierFromAirPollutionAfter = value;
  }

  set landYieldMultiplierFromAirPollutionBefore(value) {
    this._landYieldMultiplierFromAirPollutionBefore = value;
  }

  updateFn(t, dt) {
    return clip(this._landYieldMultiplierFromAirPollutionAfter.k, this._landYieldMultiplierFromAirPollutionBefore.k, t, this.policyYear);
  }
}
