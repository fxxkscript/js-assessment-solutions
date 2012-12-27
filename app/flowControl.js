if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided
      if(typeof num !== 'number') {
        return false;
      }
      var divisible_3 = num % 3,
          divisible_5 = num % 5;
      if(divisible_3 === 0 && divisible_5 === 0) {
        return 'fizzbuzz';
      } else if(divisible_3 === 0) {
        return 'fizz';
      } else if(divisible_5 === 0) {
        return 'buzz';
      } else {
        return num;
      }
    }
  };
});
