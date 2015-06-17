var callback = function() {
	// Callback goodness here
}


page.setup(
	[
		{
			"template" : "message",
			"data": {
				"message" : "This is dynamic content/"
			}
		}
	], callback
);
