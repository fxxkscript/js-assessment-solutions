if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str +', '+ str2;
      };
    },

    makeClosures : function(arr, fn) {
      var result = [];
      for(var i = 0, length = arr.length; i < length; i++) {
        var temp = (function (num) {
          return function() {
            return fn(arr[num]);
          };
        })(i);
        result.push(temp);
      }
      return result;
    },

    partial : function(fn, str1, str2) {
      var slice = Array.prototype.slice,
      stored_args = slice.call(arguments, 1);
      return function() {
        var new_args = slice.call(arguments),
        args = stored_args.concat(new_args);
        return fn.apply(null, args);
      }
    },

    useArguments : function() {
      var arr = Array.prototype.slice.call(arguments);
      var result = 0;

      for(var i = 0, length = arr.length; i < length; i++) {
        result += arr[i];
      }
      return result;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      fn.apply(null, args);
    },

    curryIt : function(fn) {
      var slice = Array.prototype.slice,
      stored_args = slice.call(arguments, 1);
      return function() {
        var new_args = slice.call(arguments),
        args = stored_args.concat(new_args);
        return fn.apply(null, args);
      }
    }
  };
});
