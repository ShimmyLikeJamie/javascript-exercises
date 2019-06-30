const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  let rounded = Math.round(c * 10) / 10;
  return rounded;
}

const ctof = function(c) {
  let f = (c * (9/5)) + 32;
  let rounded = Math.round(f * 10) / 10;
  return rounded;
}

module.exports = {
  ftoc,
  ctof
}
