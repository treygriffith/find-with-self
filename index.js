var matches = require('matches-selector')
  , query = require('query')
  , toArray = require('to-element-array');

module.exports = findWithSelf;

function findWithSelf(el, selector) {
  var selected = toArray(query.all(selector, el));

  if(matches(el, selector)) selected.push(el);
  
  return selected;
}