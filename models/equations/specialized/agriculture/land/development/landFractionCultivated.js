import { Aux } from "../../../../aux.js";

export class LandFractionCultivated extends Aux {
  constructor(potentiallyArableLandTotal) {
    super("landFractionCultivated", 84);

    this.potentiallyArableLandTotal = potentiallyArableLandTotal; // hectares, used here and in eqn 97
    this.plottable = true;
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  updateFn() {
    return this._arableLand.k / this.potentiallyArableLandTotal;
  }
}
