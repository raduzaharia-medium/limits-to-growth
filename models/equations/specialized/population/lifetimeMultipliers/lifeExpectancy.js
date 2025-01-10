import { Aux } from "../../../aux.js";

export class LifeExpectancy extends Aux {
  constructor() {
    super("lifeExpectancy", 19);

    this.units = "years";
    this.plotColor = "#666666";
    this.plotMin = 0;
    this.plotMax = 80;
    this.dependencies = [
      "lifetimeMultiplierFromFood",
      "lifetimeMultiplierFromHealthServices",
      "lifetimeMultiplierFromPollution",
      "lifetimeMultiplierFromCrowding",
    ];
    this.normal = 32;
    this.sequenceNumber = 85;
  }

  set lifetimeMultiplierFromFood(value) {
    this._lifetimeMultiplierFromFood = value;
  }

  set lifetimeMultiplierFromHealthServices(value) {
    this._lifetimeMultiplierFromHealthServices = value;
  }

  set lifetimeMultiplierFromPollution(value) {
    this._lifetimeMultiplierFromPollution = value;
  }

  set lifetimeMultiplierFromCrowding(value) {
    this._lifetimeMultiplierFromCrowding = value;
  }

  updateFn(t, dt) {
    return (
      this.normal *
      this._lifetimeMultiplierFromFood.k *
      this._lifetimeMultiplierFromHealthServices.k *
      this._lifetimeMultiplierFromPollution.k *
      this._lifetimeMultiplierFromCrowding.k
    );
  }
}
