//= require lib/bower_components/jquery/dist/jquery.js
//= require lib/bower_components/mustache/mustache.js
//= require lib/bower_components/mustache-wax/mustache-wax.min.js

//= require util


'use strict';

/* ------ Add mustache view ------ */

function addView(container, view, callback, replace, prepend) {

	$.get('templates/' + view.template + '.html', function(template) {
		var rendered =  Mustache.render(template, view.data);
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
}


/* ------ Add multiple mustache views as callbacks ------ */

function addViews(container, views, outerCallback) {

	function createCallback(view, callback) {
		return function() {
			addView(container, view, callback, false, false); 
		}
	}

	var callback = outerCallback;

	$.each(views, function(key, view) {
		callback = createCallback(view, callback);
	});

	if(callback != null) {
		callback();
	}
}

function setupPage(views, outerCallback) {

	$(document).ready(function() {
		addViews($('#main'), views, outerCallback);
	});

}

