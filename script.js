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

$(document).ready(function(){
// $('body').mousemove(function(e){
// $('.blimp').css({
//	'top': e.clientY - 20,
//	'left': e.clientX - 20});
// });

	$('body').click(function(e){
		$('.fire').css({
			'display': 'block',
			'top': e.clientY + 20,
			'left': e.clientX - 60
		}).animate({
			'top': e.clientY + 150,
			'left': e.clientY - 100
		}).fadeOut('fast');
	});
	animateBlimp();
});
