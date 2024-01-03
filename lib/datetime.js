function isDate(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isDate');
  }
  const dateFormatRegex = /^\d{2}\D\d{2}\D\d{4}$/;
  return dateFormatRegex.test(value);
}

function isTime(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isTime');
  }
  const timeFormatRegex = /^\d{2}\D\d{2}\D\d{2}$/;
  return timeFormatRegex.test(value);
}

function isDateTime(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isDateTime');
  }
  const dateTimeFormatRegex = /^\d{2}\D\d{2}\D\d{4} \d{2}\D\d{2}\D\d{2}$/;
  return dateTimeFormatRegex.test(value);
}

module.exports = {
  isDate,
  isTime,
  isDateTime,
};