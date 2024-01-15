'use strict';

function isBoolean(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isBoolean');
  }
  return typeof value === 'boolean';
}

function isBoolTrue(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isBoolTrue');
  }
  return isBoolean(value) && value === true;
}

function isBoolFalse(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isBoolFalse');
  }
  return isBoolean(value) && value === false;
}

module.exports = {
  isBoolean,
  isBoolTrue,
  isBoolFalse,
};