/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 **/

var RocketModel = Backbone.Model.extend({
  defaults: function() {
    return {
      name: "Rocket",
      velocityUp    : 0,
      velocityDown  : 0,
      velocityLeft  : 0,
      velocityRight : 0
    };
  },
  getVelocityX: function() { 
    return velocityRight - velocityLeft;
  },
  getVelocityY: function() { 
    return velocityDown - velocityUp;
  },
  getAngle: function() {
    return Math.atan2(this.getVelocityY, this.getVelocityX)*57.2957795;
  },
  manipulateDirectionalVel: function(key, manipulation){
    switch(key) {
    case 'UP':
      this.velocityUp += manipulation;
      break;
    case 'RIGHT':
      this.velocityRight += manipulation;
      break;
    case 'DOWN':
      this.velocityDown += manipulation;
      break;
    case 'LEFT':
      this.velocityLeft += manipulation;
      break;  
    }
  },
  getDirectionalVel: function(key){
    switch(key) {
      case 'UP':
       return this.velocityUp;
      case 'RIGHT':
        return this.velocityRight;
      case 'DOWN':
        return this.velocityDown;
      case 'LEFT':
        return this.velocityLeft;
    }
  }
});