export const scaleX = (x, xMin, xMax, gLeft, gRight) => {
  var sx = (x - xMin) / (xMax - xMin);
  var px = gLeft + sx * (gRight - gLeft);

  return px;
};

export const scaleY = (y, yMin, yMax, gBottom, gTop) => {
  var sy = (y - yMin) / (yMax - yMin);
  var py = gTop + (1 - sy) * (gBottom - gTop);

  return py;
};

// The DYNAMO clip function, a poor-man's
// conditional expression.
export const clip = (a, b, x, y) => {
  if (x >= y) return a;
  else return b;
};
