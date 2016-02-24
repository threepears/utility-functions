module.exports = function (x,y) {
  var array = [];

  if (!y) {
    for (var i = 0; i < x; i++) {
      array.push(i);
    }
  } else {
    for (var i=x; i < y; i++) {
      array.push(i);
    }
  }

  return array;
};
