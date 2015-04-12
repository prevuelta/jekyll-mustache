# jekyll-mustache
Site template using Jekyll & Mustache templates

## How it works
There is a .js file for each page loaded based on ref: variable set in the jekyll page YAML eg. 
```
---
layout: default
title: Welcome to this site
weight: 1
controller: index
---
```
```
<script src="scripts/controllers/{{ page.ref }}.js"></script>
```

This will then setup the page and load in the mustache views.

Pages are created with the following:

```
var callback = function() {
	// Stuff to run after views are added
}


setupPage(
	[ // This is an array of views.
		{
			"view" : "message", // Mustache template used
			"model": {
				"message" : "Hello World!" // All your data goodness
			}
		}
	], callback
);
```

