
'use strict';

var page = {
	
	viewContainer: $('#main'),

	setup: function(views, outerCallback) {
		var page = this;
		$(document).ready(
			function() {
				page.addViews(page.viewContainer, views, outerCallback);
			}
		);
	},

	addView: function(container, view, model, callback, replace, prepend) {

		$.get('views/' + view + '.html', function(view) {
			var rendered =  Mustache.render(view, model);
			if(!replace && !prepend) {

				container.append(rendered);

			} else if(prepend) {

				console.log('prepending');

				container.prepend(rendered);

			} else {
				container.html(rendered);
			}
			console.log("view added");
			if(callback){
				callback();
			}
		});
	},
	addViews : function(container, views, outerCallback) {

		var page = this;

		function createCallback(view, model, callback) {
			return function() {
				page.addView(container, view, model, callback, false, false); 
			}
		}

		var callback = outerCallback;

		$.each(views, function(key, value) {
			callback = createCallback(value.view, value.data, callback);
		});

		if(callback != null) {
			callback();
		}
	}

}