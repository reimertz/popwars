/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 */

(function(){

	//Keylistener
	$(window).keydown(function(evt) {
		key = evt.which;
		window.opener.postMessage(JSON.stringify({key: evt.which, pressed: true}), "*");
	}).keyup(function(evt) {
		key = evt.which;
		window.opener.postMessage(JSON.stringify({key: evt.which, pressed: false}), "*");
	});

	function changeAngle(rad){
		angle = rad*57.2957795;
			$('.rocket').css('-webkit-transform', 'rotate(' + angle + 'deg');
	}


	function receiveMessage(event) {
		rocket = JSON.parse(event.data);
		changeAngle(rocket.rad);
	}

	window.addEventListener("message", receiveMessage, false);

})();