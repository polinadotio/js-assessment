exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }
    return result;
  },

  remove : function(arr, item) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        continue;
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      //splice(i, 1) removes 1 element from index i
      if (arr[i] === item) {
        arr.splice(i, 1);
        //removing an elt shifts all elements down by one
        //decrement i to not skip next element
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    var result = [];
    result.push(item);
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  },

  curtail : function(arr) {
    //can use splice here
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        result++;
      }
    }
    return result;
  },

  duplicates : function(arr) {
    var dupes = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (dupes[arr[i]] === undefined) {
        dupes[arr[i]] = 1;
        continue;
      }
      if (dupes[arr[i]] === 1) {
        result.push(arr[i]);
        dupes[arr[i]] = 2;
      }
    }
    return result;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurences.push(i);
      }
    }
    return occurences;
  }
};
