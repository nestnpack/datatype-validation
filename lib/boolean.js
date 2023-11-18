function isBoolean(value) {
  return typeof value === 'boolean';
}

function isBoolTrue(value) {
  return isBoolean(value) && value === true;
}

function isBoolFalse(value) {
  return isBoolean(value) && value === false;
}

module.exports = {
  isBoolean,
  isBoolTrue,
  isBoolFalse,
};