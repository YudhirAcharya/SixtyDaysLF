const _ = require('lodash');
const items =[1,3,5,3,[3,4]]
const newItems =_.flattenDeep(items);
console.log(newItems)