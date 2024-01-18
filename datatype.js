/*!
---------- Datatype Validation V1.2.7 ---------- 
 * MIT License
 * Copyright (c) 2023 - 2024 Nest NPack
 */

'use strict';

/**
 * Module function datatype
 */

const datatype = (function() {
  // Modul string
  const string = {
    isString: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isString');
      }
      return typeof value === 'string' && value.trim() !== '';
    },
    toString: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function toString');
      }
      return String(value);
    },
  };

  // Modul number
  const number = {
    isInt: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isInt');
      }
      return typeof value === 'number' && Number.isInteger(value);
    },
    isFloat: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isFloat');
      }
      return typeof value === 'number' && !Number.isInteger(value);
    },
    toInt: (value) =>  {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function toInt');
      }
      return parseInt(value, 10);
    },
    toFloat: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function toFloat');
      }
      return parseFloat(value).toFixed(1);
    },
  };

  // Modul boolean
  const boolean = {
    isBoolean: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isBoolean');
      }
      return typeof value === 'boolean';
    },
    isBoolTrue: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isBoolTrue');
      }
      return isBoolean(value) && value === true;
    },
    isBoolFalse: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isBoolFalse');
      }
      return isBoolean(value) && value === false;
    },
  };

  // Modul datetime
  const datetime = {
    isDate: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isDate');
      }
      const dateFormatRegex = /^\d{2}\D\d{2}\D\d{4}$/;
      return dateFormatRegex.test(value);
    },
    isTime: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isTime');
      }
      const timeFormatRegex = /^\d{2}\D\d{2}\D\d{2}$/;
      return timeFormatRegex.test(value);
    },
    isDateTime: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isDateTime');
      }
      const dateTimeFormatRegex = /^\d{2}\D\d{2}\D\d{4} \d{2}\D\d{2}\D\d{2}$/;
      return dateTimeFormatRegex.test(value);
    },
  };
  
  // Modul web
  const web = {
    isDomain: (value) => {
      if(typeof value === 'undefined') {
        throw Error('Enter the value of the function isDomain');
      }
      
      const domainRegex = /^(?:(?:https?:\/\/)?(?:www\.)?)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})$/;
      
      return domainRegex.test(value);
    },
  };
  
  const datatype = {
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
  
  return datatype;
})();
