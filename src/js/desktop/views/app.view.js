/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 */

(function(){


var AppView = Backbone.View.extend({
    el: $("#app"),
    events: {
      "click .startGame"   : "onStartGame",
    },
    initialize: function() {
      //this.listenTo(this.model, 'change', this.render);
      //this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function() {
      return this;
    },
    onStartGame: function(){
      alert('lool');
    },

    // * * * * * * * *
    //  Game-Engine  *
    // * * * * * * * *

    initGameEngine: function(){
      //createRocket();
      //initConnections();
      setInterval(this.GameEngineLoop, (1000/60));
    },

    GameEngineLoop: function(){

      //calculateVelocityFromKeyPress();

      //moveRocket();

    },
    calculateVelocity: function(gameKeyModel, rocketModel){
      _.each(gameKeyModel, function(key){
        if (key.pressed){
          if(key.keyCode === 32) {
            //shot();
            key.pressed = false;
          } else {
            if(rocketModel.getDirectionalVel(key) <= 300)
              rocketModel.manipulateDirectionalVel(key, 9);
          }
        } else { 
          rocketModel.manipulateDirectionalVel(key, -9);
        }
      });
    }

    // * * * * * * * *
    //  Multi-Player *
    // * * * * * * * *

  });

  var App = new AppView();


})();