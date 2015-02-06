// Word Count

var words = function(word) {
  var re = /\s+/g;
  var array = word.split(re);
  var counts = {}
  for (var i = 0; i < array.length; i++) {
    counts[array[i]] = (counts[array[i]] + 1) || 1;
  }
  return counts
};

module.exports = words;
