/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 **/

var PlayerModel = Backbone.Model.extend({
  defaults: function() {
    return {
      name: "Player",
      score:0
    };
  }
});