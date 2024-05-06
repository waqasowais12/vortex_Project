$(document).ready(function () {
		initInnerSpreads();
});

var initInnerSpreads = function () {
		$('.inner-spreads').find('.el').each(function () {
				var el = $(this);
				var link = el.find('> .title');
				var text = el.find('.inner');

				link.on('click', function () {
						text.slideToggle(200, function () {
								el.toggleClass('open');
						});
				});
		});
};
