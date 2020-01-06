$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $('.back-to-top')
        .stop()
        .fadeIn(150);
    } else {
      $('.back-to-top')
        .stop()
        .fadeOut(150);
    }
  });

  $('.navbar-burger').on('click', function() {
    $(this).toggleClass('is-active');
    $(`.${$(this).data('target')}`).toggleClass('is-active');
  });
});
