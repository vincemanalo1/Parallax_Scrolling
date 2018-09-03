(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing (navigation scrolling)
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


// start collapse, expand bootstrap panel
jQuery('.panel-title-1').click( function(e) {
    jQuery('#collapse2').collapse('hide');
    jQuery('#collapse3').collapse('hide');
    jQuery('#collapse4').collapse('hide');
});

jQuery('.panel-title-2').click( function(e) {
    jQuery('#collapse1').collapse('hide');
    jQuery('#collapse3').collapse('hide');
    jQuery('#collapse4').collapse('hide');
});

jQuery('.panel-title-3').click( function(e) {
    jQuery('#collapse1').collapse('hide');
    jQuery('#collapse2').collapse('hide');
    jQuery('#collapse4').collapse('hide');
});

jQuery('.panel-title-4').click( function(e) {
    jQuery('#collapse1').collapse('hide');
    jQuery('#collapse2').collapse('hide');
    jQuery('#collapse3').collapse('hide');
});


// add class to navigation menu and fade content
$('#nav-link-1').click( function(){
    $(this).addClass('active') 
    $('#nav-link-2').removeClass('active')
    $('#nav-link-3').removeClass('active')
});
$('#nav-link-2').click( function(){
    $(this).addClass('active') 
    $('#nav-link-1').removeClass('active')
    $('#nav-link-3').removeClass('active')
});
$('#nav-link-3').click( function(){
    $(this).addClass('active') 
    $('#nav-link-1').removeClass('active')
    $('#nav-link-2').removeClass('active')
});


