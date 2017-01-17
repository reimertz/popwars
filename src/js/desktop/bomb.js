/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 */

(function(){

	function generateColor(){
		//var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
		$('body').css('background-color', 'black');
		//hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
		$('body').css('color', 'white');
	}

	generateColor();
	window.blur();

})();