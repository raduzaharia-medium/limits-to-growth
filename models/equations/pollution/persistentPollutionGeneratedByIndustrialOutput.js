import { Aux } from "../../aux.js";

export class PersistentPollutionGeneratedByIndustrialOutput extends Aux {
  constructor() {
    super("persistentPollutionGeneratedByIndustrialOutput", 139);

    this.units = "pollution units per year";
    this.fractionOfResourcesAsPersistentMaterial = 0.02; // dimensionless
    this.industrialMaterialsEmissionFactor = 0.1; // dimensionless
    this.industrialMaterialsToxicityIndex = 10; // pollution units per resource unit
    this.dependencies = ["perCapitaResourceUsageMultiplier", "population"];
  }

  set perCapitaResourceUsageMultiplier(value) {
    this._perCapitaResourceUsageMultiplier = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn() {
    return (
      this._perCapitaResourceUsageMultiplier.k *
      this._population.k *
      this.fractionOfResourcesAsPersistentMaterial *
      this.industrialMaterialsEmissionFactor *
      this.industrialMaterialsToxicityIndex
    );
  }
}
