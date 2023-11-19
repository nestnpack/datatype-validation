function isInt(value) {
  return typeof value === 'number' && Number.isInteger(value);
}

function isFloat(value) {
  return typeof value === 'number' && !Number.isInteger(value);
}

function toInt(value) {
  return parseInt(value, 10);
}

function toFloat(value) {
  return parseFloat(value).toFixed(1);
}

module.exports = {
  isInt,
  isFloat,
  toInt,
  toFloat,
};