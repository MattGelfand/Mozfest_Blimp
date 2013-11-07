var height;
var width;
var r_height;
var r_width;
function randomPosition(){
	height = $(window).height() - 200;
	width = $(window).width() - 200;
	r_height = Math.floor(Math.random() * height);
	r_width = Math.floor(Math.random() * width);
	return [r_height, r_width];
}

var move;
function animateBlimp(){
	move = randomPosition();
	$('.blimp').animate({
		top: move[0],
		left: move[1]
		}, 3000, function(){
			animateBlimp();
	});
}

var blimpPosition;
function shootLasers(){
	blimpPosition = $('.blimp').position();
}

$(document).ready(function(){
	animateBlimp();
	$('body').click(function(e){
		shootLasers();
		$('.laser').css({
			'display': 'inline',
			'top':blimpPosition.top,
			'left':blimpPosition.left
		}).animate({
			'top':e.clientY,
			'left':e.clientX
		}).fadeOut();
	});

});
