$(function() {

var element = $('#boxes li').first();
element.animate({height:20}, 1000, function() {
$(this).fadeTo('slow', 0.5);
});



element.toggleClass('selected');
console.log(element);
});