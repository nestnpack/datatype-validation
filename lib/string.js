function isString(value) {
  if(value === undefined) {
    throw Error('Enter the value of the function isString');
  }
  return typeof value === 'string' && value.trim() !== '';
}

function toString(value) {
  if(value === undefined) {
    throw Error('Enter the value of the function toString');
  }
  return String(value);
}

module.exports = {
  isString,
  toString,
};