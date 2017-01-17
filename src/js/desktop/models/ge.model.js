/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 **/

var GE = Backbone.Model.extend({

	model: {
        player: PlayerModel,
        rocket: RocketModel
    },

});
