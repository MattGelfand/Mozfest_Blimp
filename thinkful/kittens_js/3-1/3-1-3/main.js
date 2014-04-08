$(function(){

  console.log(document);

  var hello = 'world';

  $('#boxes li').on('click', function(){
    var self = $(this);
    self.addClass('selected');
    var another = 'hello';

    setTimeout(function(){
      self.removeClass('selected');
    }, 1000);

  });

  console.log(another);

});