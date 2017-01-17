var RocketView = Backbone.View.extend({
    events: {
      'click .startGame'   : 'onStartGame',
      'keydown *' : 'logKey'
    },
    initialize: function() {
      
    },
    render: function() {
      return this;
    },
    logKey: function(event){
      console.log(e.type, e.keyCode);
    }
  });