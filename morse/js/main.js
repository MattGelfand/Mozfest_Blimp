// Fit Text

/*$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });*/


// Picture element HTML5 shiv
document.createElement( "picture" );


// Smoothscroll CSS-Tricks

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top-150
        }, 1000);
        return false;
      }
    }
  });
});







