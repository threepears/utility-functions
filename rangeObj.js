var range = require('./range');

module.exports = function (a) {
  return range(a).reduce(function(all,item,index) {
    all[item] = item;
    return all;
  }, {});
};
