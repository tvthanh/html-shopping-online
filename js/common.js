(function($) {

	// Event show navigation with screen 489px
	$('.btn-bar').on('click', function() {
		$(this).parents('header').find('.navigation .box-navi').slideToggle();
	});
	
	$(".flag-controll .dropdown-menu a").on('click', function() {
		var curAttr = $(this).find('img').attr('src');
		var curCountry = $(this).find('span').text();

		$('.flag-controll').find('img.flag-pri').attr('src', curAttr);
		$('.flag-controll').find('span.country-pri').html(curCountry);
	});

	$(".list-thumbs li img").on('click', function() {
		var attrImg = $(this).attr('src');
		$(".photo-large").attr('src', attrImg);
	});

	// hide #back-top first
	$(".scrollTop").hide();
	
	// fade in #back-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.scrollTop').fadeIn();
		} else {
			$('.scrollTop').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('.scrollTop a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

})(jQuery); // end document jquery

