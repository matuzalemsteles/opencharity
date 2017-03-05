$('.slider-members').owlCarousel({
  loop: false,
  items: 5,
  nav: false,
  margin: 100
});

$('.blog-slider').owlCarousel({
  loop: false,
  items: 4,
  nav: true,
  margin: 40,
  dots: false,
  navText: [
  	'<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'
  ]
});