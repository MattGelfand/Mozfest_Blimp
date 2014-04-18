/* CHANGE IMAGES/HIGHLIGHTED TEXT */
   
$('#first').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', '#fff'),
    $('#wrap-bottom').addClass('scrolled');
  } else
    $(this).css('color', 'rgba(0, 0, 0, 0.5)'),
  	$('#wrap-bottom').removeClass('scrolled');
}, {
  offset: '30%'
});	

$('#second').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', '#fff'),
    $('#wrap-bottom').addClass('scrolled2');
  } else
    $(this).css('color', 'rgba(0, 0, 0, 0.5)'),
  	$('#wrap-bottom').removeClass('scrolled2');
}, {
  offset: '30%'
});

$('#third').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', '#fff'),
    $('#wrap-bottom').addClass('scrolled3');
  } else
    $(this).css('color', 'rgba(0, 0, 0, 0.5)'),
  	$('#wrap-bottom').removeClass('scrolled3');
}, {
  offset: '30%'
});

$('#fourth').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', '#fff'),
    $('#wrap-bottom').addClass('scrolled4');
  } else
    $(this).css('color', 'rgba(0, 0, 0, 0.5)'),
  	$('#wrap-bottom').removeClass('scrolled4');
}, {
  offset: '30%'
});

$('#fifth').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', '#fff'),
    $('#wrap-bottom').addClass('scrolled5');
  } else
    $(this).css('color', 'rgba(0, 0, 0, 0.5)'),
  	$('#wrap-bottom').removeClass('scrolled5');
}, {
  offset: '30%'
});

$('#sixth').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', '#fff'),
    $('#wrap-bottom').addClass('scrolled6');
  } else
    $(this).css('color', 'rgba(0, 0, 0, 0.5)'),
  	$('#wrap-bottom').removeClass('scrolled6');
}, {
  offset: '30%'
});


$('.one').waypoint(function(direction) {
  if (direction === 'down') {
    $(this).css('color', 'rgba(0, 0, 0, 0.5)');
    $.waypoints('above');
  }
 });

$('.one').waypoint(function(direction) {
  if (direction === 'up') {
    $(this).css('color', '#fff');
    $.waypoints('below');
  }
 });

      	 
/* CIRCLES */


$(".circles li:first-child").click(function() {
$('html, body').animate({
    scrollTop: $("#first").offset().top -60
}, 800);
return false;
});


$(".circles li:nth-child(2)").click(function() {
$('html, body').animate({
    scrollTop: $("#second").offset().top -60
}, 800);
return false;
});

$(".circles li:nth-child(3)").click(function() {
$('html, body').animate({
    scrollTop: $("#third").offset().top -60
}, 800);
return false;
});

$(".circles li:nth-child(4)").click(function() {
$('html, body').animate({
    scrollTop: $("#fourth").offset().top -60
}, 800);
return false;
});

$(".circles li:nth-child(5)").click(function() {
$('html, body').animate({
    scrollTop: $("#fifth").offset().top -60
}, 800);
return false;
});

$(".circles li:nth-child(6)").click(function() {
$('html, body').animate({
    scrollTop: $("#sixth").offset().top -60
}, 800);
return false;
});

  $(".circles li:last-child").click(function() {
$('html, body').animate({
    scrollTop: $("#seventh").offset().top -60
}, 800);
return false;
});


