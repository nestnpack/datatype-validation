'use strict';

function isInt(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isInt');
  }
  return typeof value === 'number' && Number.isInteger(value);
}

function isFloat(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isFloat');
  }
  return typeof value === 'number' && !Number.isInteger(value);
}

function toInt(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function toInt');
  }
  return parseInt(value, 10);
}

function toFloat(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function toFloat');
  }
  return parseFloat(value).toFixed(1);
}

module.exports = {
  isInt,
  isFloat,
  toInt,
  toFloat,
};