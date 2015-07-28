(function($) {

	// Event show navigation with screen 489px
	$('.btn-bar').on('click', function() {
		$(this).parents('header').find('.navigation .box-navi').slideToggle();
	});

	// Event show navigation with screen 489px
	// $('.ic-search').on('click', function() {
	// 	$(this).parents('header').find('.header-top .form-search').slideToggle();
	// });

	// fade in #back-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.scrollTop').fadeIn();
		} else {
			$('.scrollTop').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('.scrollTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

})(jQuery); // end document jquery

