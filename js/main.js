$( document ).ready(function() {

  $(window).scroll(function(){
    var nav = $("nav.navbar"),
        scroll = $(window).scrollTop();

    if (scroll >= 100) nav.addClass('fixed-nav');
    else nav.removeClass('fixed-nav');
  });

});