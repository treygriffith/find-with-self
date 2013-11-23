findWithSelf
============

Get an array of elements based on a selector's test against the current element and all descendant elements. Similar to `$.fn.andSelf`


## Usage

```javascript

var findWithSelf = require('find-with-self');

var el = document.getElementById("someid");

var els = findWithSelf(el, 'a');

```
