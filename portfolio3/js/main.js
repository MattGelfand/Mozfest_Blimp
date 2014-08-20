$(function() {
      $("#typed").typed({
        strings: ['^1000 "Matt showed great design and technical aptitude in addition to his strong editorial skills and judgement..."', '^1000 "He exhibited a truly rabid desire to learn and improve..."', '^1000 "He loved challenges and was not satisfied with mediocrity; with just getting a project done."', '^1000 "He had but one goal: ^800 Excellence."*'],
        typeSpeed: 30,
        backDelay:900,
        loop:false,
        loopCount:1 
    });


   $("#lightSlider").lightSlider({
	slideWidth:1280,
	slideMargin: 0,
	pager:true
	});	


	var down = $('#down');  
	function runIt() {
	down.animate({top:'+=20'}, 1000);
	down.animate({top:'-=20'}, 1000, runIt);
	}

	runIt();
	   
});



