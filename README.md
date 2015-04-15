# jekyll-mustache
Site template using Jekyll & Mustache templates

## How it works
There is a javascript controller file loaded each page based on the controller ref variable set in the jekyll page YAML eg. 
```
---
layout: default
title: Welcome to this site
weight: 1
controller: homepage
---
```
```
<script src="scripts/controllers/{{ page.ref }}.js"></script>
```

This will then generate / load the model and perform any pre-render functions before loading the mustache views.

Example of basic page controller:

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

Static conent can still be added to the page html files.

