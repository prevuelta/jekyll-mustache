# jekyll-mustache
Site template using Jekyll & Mustache templates

## How it works
There is a .js file for each page loaded based on ref: variable set in page header eg. 
'''
---
layout: default
title: Welcome to this site
weight: 1
ref: index
---
'''
'''
<script src="scripts/{{ page.ref }}.js"></script>
'''

This will then setup the page and load in the mustache views.

