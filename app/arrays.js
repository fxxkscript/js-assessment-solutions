if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      if (typeof Array.prototype.indexOf === 'function') {
        this.indexOf = function(arr, item) {
          return arr.indexOf(item);
        };
        return this.indexOf(arr, item);
      } else {
        for(var i = 0, length = arr.length; i < length; i++) {
          if(arr[i] === item) {
            return i;
          }
        }
        return -1;
      }
    },

    sum : function(arr) {
      var result = 0;
      for(var i = 0, length = arr.length; i < length; i++) {
        result += arr[i];
      }
      return result;
    },

    remove : function(arr, item) {
      var pos = arr.indexOf(item);
      while(pos != -1) {
        arr.splice(pos, 1);
        pos = arr.indexOf(item);
      }
      return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
      this.remove(arr, item);
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

    concat : function(arr1, arr2) {
      var str1 = arr1.join(' '),
      str2 = arr2.join(' ');
      var result = str1 + ' ' + str2;
      return result.split(' ');
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var result = 0;
      for(var i = 0, length = arr.length; i < length; i++) {
        if(arr[i] === item) {
          result++;
        }
      }
      return result;        
    },

    duplicates : function(arr) {
      var sorted = arr.sort(),
      result = [];
      for(var i = 0, length = arr.length; i < length; i++) {
        if(sorted[i+1] === sorted[i]) {
          result.push(sorted[i]);
        }
      }

      return result;
    },

    square : function(arr) {
      var result = [];
      for(var i = 0, length = arr.length; i < length; i++) {
        result.push(Math.pow(arr[i], 2));
      }
      return result;
    },

    findAllOccurrences : function(arr, target) {
      var result = [];
      for(var i = 0, length = arr.length; i < length; i++) {
        if(target === arr[i]) {
          result.push(i);
        }
      }
      return result;
    }
  };
});
