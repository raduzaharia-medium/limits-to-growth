import { Aux } from "../../../aux.js";

export class IndustrialOutput extends Aux {
  constructor() {
    super("industrialOutput", 50);

    this.units = "dollars per year";
    this.valueIn1970 = 7.9e11; // for eqns 106 and 107
    this.dependencies = ["fractionOfCapitalAllocatedToObtainingResources", "capitalUtilizationFraction", "industrialCapitalOutputRatio"];
  }

  set industrialCapital(value) {
    this._industrialCapital = value;
  }

  set fractionOfCapitalAllocatedToObtainingResources(value) {
    this._fractionOfCapitalAllocatedToObtainingResources = value;
  }

  set capitalUtilizationFraction(value) {
    this._capitalUtilizationFraction = value;
  }

  set industrialCapitalOutputRatio(value) {
    this._industrialCapitalOutputRatio = value;
  }

  updateFn() {
    return (
      (this._industrialCapital.k * (1 - this._fractionOfCapitalAllocatedToObtainingResources.k) * this._capitalUtilizationFraction.k) /
      this._industrialCapitalOutputRatio.k
    );
  }
}
