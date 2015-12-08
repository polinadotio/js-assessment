exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  //reduce duplicate characters to desired minimum
  reduceString: function(str, amount) {
    //remove char from string
    var arr = str.split('');
    var bucket = {};
    var current = '';

    for (var i = 0; i < arr.length; i ++) {

      //reset previous bucket if current changes
      if (current !== arr[i]) {
        bucket[current] = undefined;
        current = arr[i];
      }

      if (bucket[arr[i]] === undefined) {
        bucket[arr[i]] = 1;
        continue;
      }

      if (bucket[arr[i]] < amount) {
        var count = bucket[arr[i]];
        count++;
        bucket[arr[i]] = count;
        continue;
      }

      if (bucket[arr[i]] === amount) {
        arr.splice(i, 1);
        //array has been reduced by 1, so decrement index
        //so as not to skip next one
        i--;
      }
    }
    return arr.join('');
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var result = '';
    for (var i = str.length-1; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;
  }
};
