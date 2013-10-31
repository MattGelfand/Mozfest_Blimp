$(document).ready(function(){
$('body').mousemove(function(e){
$('.blimp').css({
	'top': e.clientY - 20,
	'left': e.clientX - 20});
});
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
});
