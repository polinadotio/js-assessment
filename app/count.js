exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var counter = setInterval(function() {
      console.log(start);
      start++;
      if(start > end) {
        clearInterval(counter);
      }
    }, 100);
    return {cancel : function(){clearInterval(counter)}};
  }
};
