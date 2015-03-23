
// Requires mustache-wax
Mustache.Formatters = {

};

function addViews(views, container, outerCallback) {

	function createCallback(name, model, container, callback) {
		return function() {
			addView(name, model, container, callback); 
		}
	}

	var callback = outerCallback;

	$(views).each(function(index, value) {
		callback = createCallback(value[0], value[1], container, callback);
	});


	if(callback != null) {
		callback();
	}
}


function addView(template, model, container, callback, replace, prepend) {
	// Form view

	$.get('templates/' + template + '.html', function(template) {
		var rendered =  Mustache.render(template, model);
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

