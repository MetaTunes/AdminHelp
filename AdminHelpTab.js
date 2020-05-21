$(document).ready(function() {

	var helpTab = $('#_AdminHelpTabHelp'),
		helpContent = $('#AdminHelpTabHelp ul');

	var tabColor = helpContent.data('color');

	if(tabColor) {
		helpTab.css({color: '#'+tabColor});
	}

	$(document).on('click', 'a.popout-help', popOut);
	function popOut(event) {
		var link = $(this).attr('href');
		window.open(link, 'popup', 'resizable= 1, height = 600, width=800, scrollbars=1');
		return false;
	}

});