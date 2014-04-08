$(function(){
  	$('#boxes li').on('click', function() {
  		$(this).addClass('selected');
  		setTimeout(function(){ $(this).removeClass('selected'); }, 1000);

  });
 
});