$(document).ready(function () {
		initFAQBlock();
});

var initFAQBlock = function () {
		$('.faq').find('.el').each(function () {
				var el = $(this);
				var link = el.find('.el-title');
				var text = el.find('.inner');

				link.on('click', function () {
						text.slideToggle(200, function () {
								el.toggleClass('open');
						});
				});
		});
};
