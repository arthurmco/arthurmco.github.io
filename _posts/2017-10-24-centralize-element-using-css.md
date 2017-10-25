---
layout: post
title:  "Centralize elements using CSS"
date:   2017-10-24 21:44:00 -0200
categories: webdev
tags: css, centralize
---

These days I had (indirectly) an assignment at work: centralize an element, 
both horizontally and vertically. 

I almost burned my brain cells to do it, tried to use Flexbox without success...  
Until I found these three magic lines that solved my problem:

<!--more-->

``` css

element {
	/* ... */
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%)
	/* ... */
}

```

Basically, the left and top moves it to the center, and the 
`transform: translate` line corrects the positioning, since the anchor point
is the top-left border of the element.

Note that this is relative to the ```position``` attribute, so, if it was
absolute, this will center it relative to the parent (normally the body), if it
was relative, this will center it according to the original element position
([see this link for details](https://www.w3schools.com/Css/css_positioning.asp))

Hope I helped...

Until next time!
