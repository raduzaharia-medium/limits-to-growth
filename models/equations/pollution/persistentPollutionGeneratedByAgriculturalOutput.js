import { Aux } from "../../aux.js";

export class PersistentPollutionGeneratedByAgriculturalOutput extends Aux {
  constructor() {
    super("persistentPollutionGeneratedByAgriculturalOutput", 140);

    this.units = "pollution units per year";
    this.fractionOfInputsAsPersistentMaterial = 0.001; // dimensionless
    this.agriculturalMaterialsToxicityIndex = 1; // pollution units per dollar
    this.dependencies = ["agriculturalInputsPerHectare"];
  }

  set agriculturalInputsPerHectare(value) {
    this._agriculturalInputsPerHectare = value;
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  updateFn() {
    return this._agriculturalInputsPerHectare.k * this._arableLand.k * this.fractionOfInputsAsPersistentMaterial * this.agriculturalMaterialsToxicityIndex;
  }
}
