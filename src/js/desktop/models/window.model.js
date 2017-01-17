/*
* @depend /third-party/jquery.js
* @depend /third-party/underscore.js
**/

var WindowModel = Backbone.Model.extend({
  defaults: function() {
    return {
      positionX:0,
      positionY:0,
      width:10,
      height:10
    };
  }
});