<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="apple-mobile-web-app-capable" content="yes"> <!-- iOS -->
	<meta name="mobile-web-app-capable" content="yes"> <!-- Android -->
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
	<title>Heartbreaker</title>
	<!-- bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="svg-style.css">
</head>
<body onload="init()">
	<div id="intro">
		<?php include 'img/intro.svg'; ?>	
	</div>
	<header id="header">
		<h1>Heart breaker</h1>
		<div class="btn" id="btn">
			<p class="plus">+</p>
			<p class="minus">-</p>
		</div>
	</header>
	<main id="main-content">
		<div id="about" class="about">
			<h2>Info</h2>
			<h3>Heartbreaker</h3>
			<p>The game Heartbreaker is made by Frida Lövborg.</p>

			<h3>License</h3>
			<p>All images are free to use for any kind. The images are made in Illustrator by me.</p>
		</div>
		<div id="rules" class="rules">
			<h2>Rules</h2>
			<div class="rule-row">
				<img src="img/sparkling-heart.png">
				<p> - tap, 10p</p>
			</div>
			<div class="rule-row">
				<img src="img/pink-heart.png">
				<p> - press, 20p</p>
			</div>
			<div class="rule-row">
				<img src="img/red-heart.png">
				<p> - tap, 30p</p>
			</div>
			<div class="rule-row">
				<img src="img/broken-heart.png">
				<p> - tap, all points deleted</p>
			</div>
			<div id="swipe" class="swipe">
				<h3>Swipe to start</h3>
			</div>
		</div>
		<div id="results">
			<p id="total-scores"></p>
			<div class="result-btn" id="playAgain">Start again</div>
		</div>
	</main>
	<div id="game">
		<div id="tap-element" class="tap-element animation">
			<img src="img/sparkling-heart.png">
		</div>
		<div id="press-element" class="press-element animation">
			<img src="img/pink-heart.png">
		</div>
		<div id="fast-element" class="fast-element animation">
			<img src="img/red-heart.png">
		</div>
		<div id="delete-element" class="delete-element animation">
			<img src="img/broken-heart.png">
		</div>
		<div class="all-results">
			<div class="result-container tap">
				<div class="score-container tap-img">
					<span id="tap-points" class="tap-points">0</span>
				</div>
			</div>
			<div class="result-container press">
				<div class="score-container press-img">
					<span id="press-points" class="tap-points">0</span>
				</div>
			</div>
			<div class="result-container tap">
				<div class="score-container fast-img">
					<span id="fast-points" class="tap-points">0</span>
				</div>
			</div>
			<div class="time-container">
				<div id="timer" class="timer"></div>
			</div>
			<div id="timeline">
				<div class="anim-line"></div>
			</div>
			<div class="result-container tap">
				<span id="test"></span>
			</div>
		</div>
	</div>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<!-- bootstrap -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<!-- shaker js -->
<script src="https://cdn.rawgit.com/HGustavs/Shaker.js/master/shaker.js"></script>
<!-- hammer js -->
<script src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"></script>
<script src="script.js"></script>
</body>
</html>