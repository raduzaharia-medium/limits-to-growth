import { Aux } from "../../aux.js";

export class PersistentPollutionGeneratedByAgriculturalOutput extends Aux {
  constructor() {
    super("persistentPollutionGeneratedByAgriculturalOutput", 140);

    this.units = "pollution units per year";
    this.fractionOfInputsAsPersistentMaterial = 0.001; // dimensionless
    this.agriculturalMaterialsToxicityIndex = 1; // pollution units per dollar
    this.dependencies = ["agriculturalInputsPerHectare", "arableLand"];
    this.sequenceNumber = 109;
  }

  set agriculturalInputsPerHectare(value) {
    this._agriculturalInputsPerHectare = value;
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  updateFn(t, dt) {
    return this._agriculturalInputsPerHectare.k * this._arableLand.k * this.fractionOfInputsAsPersistentMaterial * this.agriculturalMaterialsToxicityIndex;
  }
}
