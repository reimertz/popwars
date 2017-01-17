/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 **/

var KeysModel = Backbone.Model.extend({
	startListening : function() {
		$(window).keydown(function(evt) {
			if(evt.which >= 37 || evt.which <= 40) {
				gameKeys[keyMapping[rocketMovement.key] ].pressed = rocketMovement.pressed;
			}
		});
     },
    sync : function(method, collection, options) {
            console.log('socket collection '+this.name+' sync called');
     },
	defaults: function() {
		return {
			gameKeys : {
				'LEFT' : 
				{
					keyCode: 37,
					pressed: false
				},
				'UP' : {
					keyCode: 38,
					pressed: false
				},
				'RIGHT' : {
					keyCode: 39,
					pressed: false
				},
				'DOWN' : {
					keyCode: 40,
					pressed: false
				},
				'SPACE' : {
					keyCode: 32,
					pressed: false
				}
			},
			keyMapping : {
				'37' : 'LEFT',
				'38' : 'UP',
				'39' : 'RIGHT',
				'40' : 'DOWN',
				'32' : 'SPACE'
			}
		};
	}
});
