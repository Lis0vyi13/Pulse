var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  controlsText: [
    '<img src="icons/slider/chevron-left-solid.png">',
    '<img src="icons/slider/right.svg">',
  ],
  autoplayButtonOutput: false,
  autoplay: true,
  preventScrollOnTouch: 'force',

  responsive: {
    1: {
      mouseDrag: true,
    },
    768: {
      gutter: 30,
      mouseDrag: false,
    },
  },
});
