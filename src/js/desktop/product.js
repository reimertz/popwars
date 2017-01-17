/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 */

(function(){

	//Keylisteners
	gameKeys = {
				'LEFT' :
				{
					keyCode: 37,
					pressed: false,
					velocity: 0
				},
				'UP' : {
					keyCode: 38,
					pressed: false,
					velocity: 0
				},
				'RIGHT' : {
					keyCode: 39,
					pressed: false,
					velocity: 0
				},
				'DOWN' : {
					keyCode: 40,
					pressed: false,
					velocity: 0
				},
				'SPACE' : {
					keyCode: 32,
					pressed: false,
					velocity: 0
				}
			};

			keyMapping = {
				'37' : 'LEFT',
				'38' : 'UP',
				'39' : 'RIGHT',
				'40' : 'DOWN',
				'32' : 'SPACE'
			};

	$('.start-game').click(function(){
		initGame();
	});

	var myRocket,
			myBombs = [],
			winPosX = 250,
			winPosY = 250;


	function createRocket() {
		myRocket = window.open("/rocket","", "location=no, title=player1,width=10,height=10, left=" + winPosX + ",top=" + winPosY);
	}
	function resetRocket() {
		myRocket.close();
		createRocket();

	}

	function moveWinBy(win, x, y) {
		win.moveTo(x, y);
		//myRocket.focus();
	}

	function initGame(){
		createRocket();
		initConnections();
		setInterval(gameEngine, (1000/60));
	}

	function initConnections() {
		window.addEventListener("message", receiveMessage, false);
	}

	function receiveMessage(event){
		rocketMovement = JSON.parse(event.data);
		gameKeys[ keyMapping[rocketMovement.key] ].pressed = rocketMovement.pressed;
		calculateVelocityFromKeyPress();
	}

	function gameEngine(){
		//calculate velocity depending on buttons how buttons is pressed

		calculateVelocityFromKeyPress();

		moveRocket();
		//Move Window according to velocity


	}

	function moveRocket(){

		var velocityX = (gameKeys.RIGHT.velocity - gameKeys.LEFT.velocity) / (1000/60);
		var velocityY = (gameKeys.DOWN.velocity - gameKeys.UP.velocity) / (1000/60);

		if(velocityX !== 0 || velocityY !== 0 ) {

			var newPositionX = winPosX + velocityX,
				newPositionY = winPosY + velocityY;

			//Check if we hit a border
			if(newPositionX > screen.width-100  && velocityX > 0) {
				newPositionX = 0;
			}
			else if ( newPositionX < 0 && velocityX < 0) {
				newPositionX = screen.width-100;
			}
			if(newPositionY  > screen.height-150 && velocityY > 0) {
				newPositionY = 0;
			}
			else if ( newPositionY < 0 && velocityY < 0) {
				newPositionY = screen.height-150;
			}

			moveWinBy(myRocket, newPositionX, newPositionY);

			//save new positions
			winPosX = newPositionX;
			winPosY = newPositionY;

			//calculate new angle for p1 rocket
			var rocketDetails = {
				posX: winPosX,
				posY: winPosY,
				rad: Math.atan2(velocityY, velocityX)
			};

			$.ajax({ type: "POST", url: '/rockets/1', data: JSON.stringify(rocketDetails), dataType: 'json' });

			myRocket.postMessage(JSON.stringify(rocketDetails),  "*");

		}
	}

	function calculateVelocityFromKeyPress(){
		_.each(gameKeys, function(key){
			if (key.pressed){
				if(key.keyCode === 32) {
					shot();
					key.pressed = false;
				} else {
					if(key.velocity <= 300)
						key.velocity += 9 ;
				}
			} else {
				key.velocity -= 9;
				if (key.velocity < 0){
					key.velocity = 0;
				}
			}
		});
	}


	function shot(){

		var velocityX = (gameKeys.RIGHT.velocity - gameKeys.LEFT.velocity) / (1000/60);
		var velocityY = (gameKeys.DOWN.velocity - gameKeys.UP.velocity) / (1000/60);

		var bomb = {
			'x' : winPosX,
			'y' : winPosY,
			'velocityX': velocityX,
			'velocityY': velocityY,
			'time': Date.now(),
			'window': window.open("/bomb","", "location=no, title=player1,width=10,height=10, left=" + winPosX + ",top=" + winPosY )
		};
		myBombs.push(bomb);

		resetRocket();

	}

})();