(function($) {
  const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    hoverpause: true,
    autoplay: 3000
  });

  glide.mount();
})(jQuery);
