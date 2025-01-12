import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class DesiredCompletedFamilySize extends Aux {
  constructor(zeroPopulationGrowthTargetYear) {
    super("desiredCompletedFamilySize", 38);

    // desiredCompletedFamilySize.units = "persons"; // original is dimensionless
    this.dependencies = ["familyResponseToSocialNorm", "socialFamilySizeNorm"];
    this.normal = 4.0;
    this.zeroPopulationGrowthTargetYear = zeroPopulationGrowthTargetYear;
    this.sequenceNumber = 36;
  }

  set familyResponseToSocialNorm(value) {
    this._familyResponseToSocialNorm = value;
  }

  set socialFamilySizeNorm(value) {
    this._socialFamilySizeNorm = value;
  }

  updateFn(t, dt) {
    return clip(2.0, this.normal * this._familyResponseToSocialNorm.k * this._socialFamilySizeNorm.k, t, this.zeroPopulationGrowthTargetYear);
  }
}
