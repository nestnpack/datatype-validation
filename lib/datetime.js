function isDate(value) {
  const dateFormatRegex = /^\d{2}\D\d{2}\D\d{4}$/;
  return dateFormatRegex.test(value);
}

function isTime(value) {
  const timeFormatRegex = /^\d{2}\D\d{2}\D\d{2}$/;
  return timeFormatRegex.test(value);
}

function isDateTime(value) {
  const dateTimeFormatRegex = /^\d{2}\D\d{2}\D\d{4} \d{2}\D\d{2}\D\d{2}$/;
  return dateTimeFormatRegex.test(value);
}

module.exports = {
  isDate,
  isTime,
  isDateTime,
};