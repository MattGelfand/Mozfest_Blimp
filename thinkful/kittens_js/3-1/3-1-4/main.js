$(function(){

  $('#boxes li').on('click', function(){
    var self = $(this);
    self.addClass('selected');

    setTimeout(function(){
      self.removeClass('selected');
    }, 300);

  });


});