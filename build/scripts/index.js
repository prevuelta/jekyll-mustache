var indexPage = {

	onReady : function() {

		var container = $('#main');

		addView('dashboard', { message: 'Welcome to this site'}, container, null);


	}
}

$(document).ready( indexPage.onReady );