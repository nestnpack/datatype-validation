function isString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

function toString(value) {
  return String(value);
}

module.exports = {
  isString,
  toString,
};