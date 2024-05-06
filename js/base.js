$(document).ready(function () {
		initHeader();
		initMenu();
});

var initHeader = function () {
		var lastScrollTop = 0;

		$(window).on('scroll', function () {
				var st = window.pageYOffset || document.documentElement.scrollTop;
				if (st > lastScrollTop) {
						$('html').removeClass('scroll-up');
				} else if (st < lastScrollTop) {
						$('html').addClass('scroll-up');
				}

				lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		});

		var el = $('.header');
		var _scroll = function () {
				if ($(window).scrollTop() > 0) {
						el.addClass('scrolled');
				} else {
						el.removeClass('scrolled');
				}
				if ($(window).scrollTop() > $(window).outerHeight() / 2) {
						el.addClass('min');
				} else {
						el.removeClass('min');
				}
		};

		_scroll();
		$(window).on('scroll resize', _scroll);
};

var initMenu = function () {
		$('.toggle-menu, .menu-fader').on('click', function () {
				$('html').toggleClass('open-menu');
		});

		$('.menu').find('li').has('.sub').each(function () {
				var el = $(this);
				var link = el.find('> *:not(.sub)');
				var text = el.find('.sub');

				link.on('click', function () {
						text.slideToggle(200, function () {
								el.toggleClass('open');
						});
				});
		});
};
