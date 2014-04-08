//Fade In Home Image //

$(document).ready(function () {
   $("img.bw").delay(600).animate({"opacity": "1"}, 900);
});

//Show Text on Toggle //

  $(".box1").click(function(){
    $(".boxes-inner").hide("slow"(function() {
    $('.box1 p').show('slow');
    });
});

// Header Animation //
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


        $('#circle1').addClass("hidden");

        $('#circle1').click(function() {
            var $this = $(this);

            if ($this.hasClass("hidden")) {
                $(this).removeClass("hidden").addClass("visible");

            } else {
                $(this).removeClass("visible").addClass("hidden");
            }
        });


