import { Aux } from "../../../aux.js";

export class ServiceOutput extends Aux {
  constructor() {
    super("serviceOutput", 70);

    this.units = "dollars per year";
    this.plotColor = "#4a8a91";
    this.plotMin = 0;
    this.plotMax = 1.0e13;
    this.dependencies = ["capitalUtilizationFraction", "serviceCapitalOutputRatio"];
    this.plottable = true;
  }

  set serviceCapital(value) {
    this._serviceCapital = value;
  }

  set capitalUtilizationFraction(value) {
    this._capitalUtilizationFraction = value;
  }

  set serviceCapitalOutputRatio(value) {
    this._serviceCapitalOutputRatio = value;
  }

  updateFn() {
    return (this._serviceCapital.k * this._capitalUtilizationFraction.k) / this._serviceCapitalOutputRatio.k;
  }
}
