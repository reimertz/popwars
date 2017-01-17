/*
* @depend /third-party/jquery.js
* @depend /third-party/underscore.js
**/

var WeaponModel = Backbone.Model.extend({
  defaults: function() {
    return {
      rockets:0,
      bombs:0
    };
  }
});