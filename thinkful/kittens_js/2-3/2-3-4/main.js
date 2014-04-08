$(function(){

  var element = $('#boxes li').first();

  element.animate({ marginLeft: 100, width: 400 }, 1000);

  element.toggleClass('selected');
  console.log(element);

});