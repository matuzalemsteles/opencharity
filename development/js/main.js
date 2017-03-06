$(document).ready(function () {
    $(".navbar-toggle").click(function (e) {
        $('.navbar-nav').closest('.navbar-nav').toggleClass("navbar-open");
        e.stopPropagation();
    });
    $(document).on('click', function (e) {    
        if (!$(e.target).closest('.navbar-open').length) $('.navbar-nav').removeClass("navbar-open");
    });
});

$('.anchor').click(function(){
    $('body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.slider-members').owlCarousel({
  loop: false,
  items: 5,
  nav: false,
  margin: 100,
  responsive: {
    0: {
      items: 2
    },
    520: {
      items: 3
    },
    700: {
      items: 4
    },
    992: {
      items: 5
    }
  }
});

$('.blog-slider').owlCarousel({
  loop: false,
  items: 4,
  nav: true,
  margin: 40,
  dots: false,
  navText: [
  	'<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    740: {
      items: 2
    },
    870: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});