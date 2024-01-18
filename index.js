/*!
---------- Datatype Validation V1.2.7 ---------- 
 * MIT License
 * Copyright (c) 2023 - 2024 Nest NPack
 */

'use strict';

/**
 * Require library modules
 */

const string = require('./lib/string.js');
const number = require('./lib/number.js');
const boolean = require('./lib/boolean.js');
const datetime = require('./lib/datetime.js');
const web = require('./lib/web.js');


/**
 * Export library modules
 */

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
    // Web
    isDomain: web.isDomain,
  //TO
    toString: string.toString,
    toInt: number.toInt,
    toFloat: number.toFloat,
};