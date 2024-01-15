'use strict';

function isString(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isString');
  }
  return typeof value === 'string' && value.trim() !== '';
}

function toString(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function toString');
  }
  return String(value);
}

module.exports = {
  isString,
  toString,
};