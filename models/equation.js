import { scaleX, scaleY } from "../tools.js";

export class Equation {
  constructor(qName, qNumber) {
    this.qName = qName;
    this.qNumber = qNumber;

    this.units = "dimensionless";
    this.data = [];
    this.j = null;
    this.k = null;

    this.plotThisVar = false;
    this.plotColor = "transparent";
    this.plotMin = 0;
    this.plotMax = 1000;
  }

  warmup(t, dt) {
    this.k = this.updateFn(t, dt);
  }

  reset() {
    this.j = null;
    this.k = null;
    this.data = [];
  }

  update(t, dt) {
    this.k = this.updateFn(t, dt);
    this.data.push({ x: t, y: this.k });

    return this.k;
  }

  tick() {
    this.j = this.k;
  }

  updateFn(t, dt) {
    return this.j;
  }
}
