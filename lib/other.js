'use strict';

/**
 * Module server
 */

function isDomain(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isDomain');
  }
  
  const domainRegex = /^(?:(?:https?:\/\/)?(?:www\.)?)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})$/;
  
  return domainRegex.test(value);
}

function isIPAddress(value) {
  if(typeof value === 'undefined') {
    return Error('Enter the value of the function isIPAddress');
  }
  
  const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
  
  return ipRegex.test(value);
}
 
module.exports = {
  isDomain,
  isIPAddress,
}