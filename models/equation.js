export class Equation {
  constructor(qName, qNumber) {
    this.qName = qName;
    this.qNumber = qNumber;

    this.units = "dimensionless";
    this.data = [];
    this.j = null;
    this.k = null;

    this.plotThisVar = false;
    this.color = "transparent";
    this.min = 0;
    this.max = 1000;
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
