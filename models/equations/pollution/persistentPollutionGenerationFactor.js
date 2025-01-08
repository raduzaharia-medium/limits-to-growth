import { Aux } from "../../aux.js";

export class PersistentPollutionGenerationFactor extends Aux {
  constructor(policyYear) {
    super("persistentPollutionGenerationFactor", 138);

    this.before = 1;
    this.after = 1;
    this.policyYear = policyYear;
  }

  updateFn() {
    return clip(this.after, this.before, t, this.policyYear);
  }
}
