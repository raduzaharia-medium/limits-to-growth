import { Aux } from "./aux.js";

export class Table extends Aux {
  constructor(qName, qNumber, data, iMin, iMax, iDelta) {
    super(qName, qNumber);

    this.data = data;
    this.iMin = iMin;
    this.iMax = iMax;
    this.iDelta = iDelta;

    this.indices = [];
    for (var i = iMin; i <= iMax; i += iDelta) this.indices.push(i);
  }

  interpolate(lower, upper, fraction) {
    var lowerVal = this.data[lower];
    var upperVal = this.data[upper];

    return lowerVal + fraction * (upperVal - lowerVal);
  }

  lookup(v) {
    if (v <= this.iMin) {
      return this.data[0];
    } else if (v >= this.iMax) {
      return this.data[this.data.length - 1];
    } else {
      for (var i = this.iMin, j = 0; i <= this.iMax; i += this.iDelta, j++)
        if (i >= v) {
          return this.interpolate(j - 1, j, (v - (i - this.iDelta)) / this.iDelta);
        }
    }
  }

  reset() {
    return null;
  }

  update(t, dt) {
    this.k = this.lookup(this.updateFn(t, dt));
    return this.k;
  }

  warmup(t, dt) {
    this.k = this.lookup(this.updateFn(t, dt));
    return this.k;
  }
}
