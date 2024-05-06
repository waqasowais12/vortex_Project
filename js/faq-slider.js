$(document).ready(function () {
		initFAQSlider();
});

var initFAQSlider = function () {
		var swiperFAQThumbs = new Swiper('.faq-thumbs', {
				slidesPerView: 'auto',
				freeMode: true,
				speed: 500,
				watchSlidesProgress: true
		});

		var swiperFAQMain = new Swiper('.faq-main', {
				slidesPerView: 1,
				speed: 500,
				allowTouchMove: false,
				effect: 'fade',
				fadeEffect: {
						crossFade: true
				},
				thumbs: {
						swiper: swiperFAQThumbs
				}
		});
};
