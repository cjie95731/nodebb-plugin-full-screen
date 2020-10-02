"use strict";

$(document).ready(function () {
    $("body").attr("id","screen");
	var panel = $('<li class="js_full_screen"><a title="Full screen" href="#"><i class="screen fa fa-arrows-alt"></i><span class="visible-xs-inline">Full screen</span></a></li>');

	$('ul#logged-in-menu').prepend(panel);
	$('ul#logged-out-menu').prepend(panel);

	if (utils.findBootstrapEnvironment() === 'xs') {
		$('#menu').prepend(panel);
	}
	
	panel.on('click', function () {
		screenfull.toggle();
	});

	panel.find('a').tooltip({
		placement: 'bottom',
		title: 'Full screen',
	});
});
