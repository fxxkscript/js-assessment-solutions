if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return str.match(/\d/) ? true : false;
    },

    containsRepeatingLetter : function(str) {
      return str.match(/([a-zA-Z])\1+/) ? true : false;
    },

    endsWithVowel : function(str) {
      return str.match(/[aeiou]$/i) ? true : false;
    },

    captureThreeNumbers : function(str) {
      var matched = str.match(/\d{3}/);
      if(matched === null) {
        return false;
      }
      return matched[0];
    },

    matchesPattern : function(str) {
      return str.match(/^\d{3}\-\d{3}\-\d{4}$/) ? true : false;
    },
    isUSD : function(str) {
      return str.match(/^\$(\d+)(\,\d{3})*(\d{1,3})?(\.\d{2})?$/) ? true : false;
    }
  };
});
