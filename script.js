function init() {
	// declare variables
	var initGame = document.getElementById('game');
	var intro = document.getElementById('intro');
	var about = document.getElementById('about');
	var gameRules = document.getElementById('rules');
	var swiper = document.getElementById('swipe');
	var resultBoard = document.getElementById('results');
	var header = document.getElementById('header');
	var main = document.getElementById('main-content');
	var button = document.getElementById('btn');
	var tapResult = document.getElementById('tap-points');
	var pressResult = document.getElementById('press-points');
	var fastResult = document.getElementById('fast-points');
	var hide = 'none';
	var show = 'block';
	var message;
	var executed = 0;

	// points
	var tapPoints = 0;
	var pressPoints = 0;
	var fastPoints = 0;
	var total = 0;

	// results
	tapResult.innerHTML = 0;
	pressResult.innerHTML = 0;
	fastResult.innerHTML = 0;

	// hide and show elements
	initGame.style.display = hide;
	swiper.style.display = hide;
	resultBoard.style.display = hide;
	gameRules.style.display = hide;
	about.style.display = hide;
	header.style.display = hide;
	main.style.display = hide;
	intro.style.display = show;

	// add background color if "start again" executes in the end of the game
	document.body.style.backgroundColor = 'pink';

	var swipe = new Hammer(gameRules);

	function initShaker(executed) {
		shaker.on('shake', function(o) {
			if(executed == 0) {
				executed = 1;
				rules();
			} 
			// else; i use this to only execute shaker once
			// otherwice the shaker disturbs the game
		});
	}
	initShaker(executed);

	$('.btn').click(function() {
		$('body').toggleClass('menu-active');
		$('.btn').toggleClass('active');

		if($('.btn').hasClass('active')) {
			about.style.display = show;
			gameRules.style.display = hide;
		} else {
			about.style.display = hide;
			gameRules.style.display = show;
		}
	});

	function rules() {
		intro.style.display = hide;
		document.body.style.backgroundColor = '#f2f2f2';
		header.style.display = show;
		button.style.display = show;
		main.style.display = show;
		gameRules.style.display = show;

		setTimeout(function() { 
			swiper.style.display = show;
		}, 3000);

		swipe.on('swipe swiperight swipeleft', function() {
			game();
		});
	}

	function game() {
		function timer(i, call) {
		    call = call || function() {};
		    var countDown = setInterval(function() {
		        document.getElementById('timer').innerHTML = i + 's';
		        i-- || (clearInterval(countDown), call());
		    }, 1000); // every second
		}
	    timer(15, function() {
	        gameOver();
	    }); // for 15 seconds

		tapResult.innerHTML = 0;
		pressResult.innerHTML = 0;
		fastResult.innerHTML = 0;

		swiper.style.display = hide;
		intro.style.display = hide;
		gameRules.style.display = hide;
		about.style.display = hide;
		header.style.display = hide;
		initGame.style.display = show;
		main.style.display = hide;
		document.body.style.backgroundColor = '#fff';

		// interactive element (tap, press)
		var tapElement = document.getElementById('tap-element');
		var pressElement = document.getElementById('press-element');
		var fastElement = document.getElementById('fast-element');
		var deleteElement = document.getElementById('delete-element');

		// hammer
		var tap = new Hammer(tapElement);
		var press = new Hammer(pressElement);
		var fast = new Hammer(fastElement);
		var erase = new Hammer(deleteElement);

		tap.on('tap', function(e) {
			// increase points/tap with 10
			// hammer js fires twice each time
			tapResult.innerHTML = tapPoints += 5;
		});

		press.on('press', function(e) {
			// increase points/press with 20
			// hammer js fires twice each time
			pressResult.innerHTML = pressPoints += 10;
		});
		fast.on('tap', function(e) {
			// increase points/tap with 30
			// hammer js fires twice each time
			fastResult.innerHTML = fastPoints += 15;
		});
		erase.on('tap', function() {
			// erase all the points
			tapPoints = 0;
			pressPoints = 0;
			fastPoints = 0;

			tapResult.innerHTML = 0;
			pressResult.innerHTML = 0;
			fastResult.innerHTML = 0;
		});

		shaker.on('tilt',function(o) {
			// broken heart icon moves with value of beta and gamma
			var beta = (Math.round(o.beta * 10.0) / 10.0);
			var gamma = (Math.round(o.gamma * 10.0) / 10.0);

			deleteElement.style.transform = 'translate('+gamma+'px,-'+beta+'px)';
		});
	}

	function gameOver() {
		document.body.style.backgroundColor = '#f2f2f2';
		total = tapPoints + pressPoints + fastPoints;

		initGame.style.display = hide;
		resultBoard.style.display = show;
		header.style.display = show;
		main.style.display = show;
		button.style.display = hide;

		// game message after score
		if (total <= 200) {
			message = 'Come on, lets break some hearts!'
		} else if (total >= 210) {
			message = 'You are a true heart breaker!'
		} else if (total >= 400) {
			message = 'You came here to break hearts, and you did it!'
		}

		document.getElementById('total-scores').innerHTML = 'You have got <span>' + total + '</span> points.<br>' + message;

		$('#playAgain').click(function() {
			// change value of execute, able to use shaker again
			executed = 0;
			init(executed); 
		});
	}
}