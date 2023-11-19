const datatype = (function() {
  // Modul string
  const string = {
    isString: (value) => {
      return typeof value === 'string' && value.trim() !== '';
    },
    toString: (value) => {
      return String(value);
    }
  };

  // Modul number
  const number = {
    isInt: (value) => {
      return typeof value === 'number' && Number.isInteger(value);
    },
    isFloat: (value) => {
      return typeof value === 'number' && !Number.isInteger(value);
    },
    toInt: (value) =>  {
      return parseInt(value, 10);
    },
    toFloat: (value) => {
      return parseFloat(value).toFixed(1);
    }
  };

  // Modul boolean
  const boolean = {
    isBoolean: (value) => {
      return typeof value === 'boolean';
    },
    isBoolTrue: (value) => {
      return isBoolean(value) && value === true;
    },
    isBoolFalse: (value) => {
      return isBoolean(value) && value === false;
    }
  };

  // Modul datetime
  const datetime = {
    isDate: (value) => {
      const dateFormatRegex = /^\d{2}\D\d{2}\D\d{4}$/;
      return dateFormatRegex.test(value);
    },
    isTime: (value) => {
      const timeFormatRegex = /^\d{2}\D\d{2}\D\d{2}$/;
      return timeFormatRegex.test(value);
    },
    isDateTime: (value) => {
      const dateTimeFormatRegex = /^\d{2}\D\d{2}\D\d{4} \d{2}\D\d{2}\D\d{2}$/;
      return dateTimeFormatRegex.test(value);
    }
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
    //TO
      toString: string.toString,
      toInt: number.toInt,
      toFloat: number.toFloat
  };
  
  return datatype;
})();
