$(function(){

  var elements = $('#boxes li');

  elements.each(function(i,el){
    if ($(el).hasClass('caught')) {
      console.log('caught the tricky element!');
    } else {
      console.log('not caught');
    }
  });

  elements.toggleClass('selected');
  console.log(elements);

});