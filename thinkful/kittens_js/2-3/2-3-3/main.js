$(function(){

  var element = $('.grandparent > p');
  var details = $("<div class='details'>fdjlsdkjf sdlfsdklfjlsd</div>")

  element.before(details);

  element.toggleClass('selected');
  console.log(element);

});