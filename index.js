/*
 * MIT License
 * Copyright (c) 2023 Haidar Ahmad Faiq
 * --- datatype-validation --- *
*/

const string = require('./lib/string.js');
const number = require('./lib/number.js');
const boolean = require('./lib/boolean.js');
const datetime = require('./lib/datetime.js');

module.exports = {
  //IS
    // String
    isString: string.isString,
    toString: string.toString,
  
    // Number
    isInt: number.isInt,
    isFloat: number.isFloat,
    toInt: number.toInt,
    toFloat: number.toFloat,
  
    // Boolean
    isBoolean: boolean.isBoolean,
    isBoolTrue: boolean.isBoolTrue,
    isBoolFalse: boolean.isBoolFalse,
  
    // Datetime
    isDate: datetime.isDate,
    isTime: datetime.isTime,
    isDateTime: datetime.isDateTime,
  //TO
    toString: string.toString,
    toInt: number.toInt,
    toFloat: number.toFloat.
};