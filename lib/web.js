function isDomain(value) {
  if(value === undefined) {
    throw Error('Enter the value of the function isDomain');
  }
  
  const domainRegex = /^(?:(?:https?:\/\/)?(?:www\.)?)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})$/;
  
  return domainRegex.test(value);
}

module.exports = {
  isDomain,
}