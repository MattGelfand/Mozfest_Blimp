$(function(){

  function bounceDown(){
    $('.ball').stop().animate({ marginTop: 140 }, 500, function(){ bounceUp(); });
  }

  function bounceUp(){
    $('.ball').stop().animate({ marginTop: 30 }, 500);
  }

  $('.button').on('click', function(){
    bounceDown();
  });

});