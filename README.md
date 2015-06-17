# jekyll-mustache
Site template using Jekyll & Mustache templates

## How it works
Static content is handled by the jekyll templating system while dynamic content is handled
via mustache views. These are handled by a page controller loaded by a var in the jekyll YAML eg. 
```
---
layout: default
title: Welcome to this site
weight: 1
controller: homepage
---
```
```
<script src="scripts/page_controllers/{{ page.ref }}.js"></script>
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
			"template" : "message", // Mustache template used
			"data": {
				"message" : "Hello World!" // All your data goodness
			}
		}
	], callback
);
```
