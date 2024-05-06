	var swiperSpreadsThumbs = new Swiper('.spreads-thumbs', {
			slidesPerView: 'auto',
			freeMode: true,
			speed: 200,
			watchSlidesProgress: true
	});

	var swiperSpreadsMain = new Swiper('.spreads-main', {
			slidesPerView: 1,
			speed: 200,
			effect: 'fade',
			fadeEffect: {
					crossFade: true
			},
			thumbs: {
					swiper: swiperSpreadsThumbs
			}
	});
