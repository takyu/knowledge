## GSAP

GSAP stands for GreenSock Animation Platform and is a library for setting up animations in JavaScript.  
<https://greensock.com/>  
By using this library, you can create amazing SVG animations, supercharge immersive WebGL experiences, and control performant Canvas animations.

- Installaton

	- npm

	```sh
	npm install gsap
	```

	- yarn

	```sh
	yarn add gsap
	```

## GSAPv3

For GSAPv3, is simplified API and **TweenMax**, **TweenLite**, **TimelineLite**, and **TimelineMax** have all been consolidated into a single ***"gsap"*** object.  
<https://greensock.com/3-release-notes#simplified-api>  

- Kind of Tween

	- to

		Specifies the state of the goal (animation from the current state).

		```js
		gsap.to(element, {
			// complete state
			{
				prop: value,
				prop: value,
				..
			},
			Animation start time (in seconds)
		});
		```
	
	- from

		Specify the start state (animation to return to the current state).

		```js
		gsap.from(element, {
			// initial state
			{
				prop: value,
				prop: value,
				..
			}
		});
		```

	- fromto

		Animates the object from the specified state (initial state) to the specified state (completion state).  
		The duration is specified in the completion state.

		```js
		gsap.fromTo(element, {
			// initial state
			{
				prop: value,
				prop: value,
				..
			},

			// Complete state
			{
				prop: value,
				prop: value,
				..
			},
		});
		```

	- set

		Specifies the state.  
		(This can be specified in GSAP without using CSS.)  
		**from** is used when you want to change the position but leave it as it is because the animation returns to the initial state when it is executed.

		```js
		gsap.set(element, {
			// specify a static state that will not be animated
			{
				prop: value,
				prop: value,
				..
			},
		});
		```

I found [this site](https://qiita.com/takeshisakuma/items/97a7f702ec3c4f656525) to be very well organized and easy to understand.

## Viewport

A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed.  
In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode).  
Content outside the viewport is not visible onscreen until scrolled into view.

## Intersection Observer API

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.  
<https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API>  
Intersection information is needed, such as Lazy-loading of images or other content as a page is scrolled.

- [Constructor](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

	Creates a new IntersectionObserver object which will execute a specified callback function when it detects that a target element's visibility has crossed one or more thresholds.

	```js
	const observer = new IntersectionObserver(callback[, options]);
	```

	- callback

		A function which is called when the percentage of the target element is visible crosses a threshold.  
		The callback receives as input two parameters as follows.

		- entries

			An array of IntersectionObserverEntry objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.

		- observer

			The IntersectionObserver for which the callback is being invoked.

	- options

		Optional.
		An optional object which customizes the observer.  
		If options isn't specified, the observer uses the document's viewport as the root, with no margin, and a 0% threshold (meaning that even a one-pixel change is enough to trigger a callback).  
		You can provide any combination of the following options.

		- root

			An Element or Document object which is an ancestor of the intended target, whose bounding rectangle will be considered the viewport.  
			If no root value was passed to the constructor or its value is null, the top-level document's viewport is used.

		- rootMargin

			A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes.  
			Specifies only **%** or **px**.  
			The default is "0px 0px 0px 0px".  

		- threshold

			Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target.  
			A value of 0.0 means that even a single visible pixel counts as the target being visible.  
			1.0 means that the entire target element is visible.  
			The default is a threshold of 0.0.  

	- Return value

		A new IntersectionObserver which can be used to watch for the visibility of a target element within the specified root crossing through any of the specified visibility thresholds.  Call its observe() method to begin watching for the visibility changes on a given target.

- Properties

	Descriptions of each are given in the Options section above.

	- IntersectionObserver.root

	- IntersectionObserver.rootMargin

	- IntersectionObserver.thresholds

- Methods

	- [IntersectionObserver.disconnect()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect)

		Stops the IntersectionObserver object from observing any target.

	- [IntersectionObserver.observe()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe)

		Tells the IntersectionObserver a target element to observe.

	- [IntersectionObserver.takeRecords()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords)

		Returns an array of IntersectionObserverEntry objects for all observed targets.

	- [IntersectionObserver.unobserve()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve)

		Tells the IntersectionObserver to stop observing a particular target element.

## Object.assign()

The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign>
It returns the modified target object.

```js
/**
 * @param target The target object
 * @param sources The source object(s)
 * 
 * @return Object The target object.
 */
Object.assign(target, ...sources)
```

## Polyfill

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.  
<https://developer.mozilla.org/en-US/docs/Glossary/Polyfill>  
For example, a polyfill could be used to mimic the functionality of a text-shadow in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require.

## TouchEvent

The TouchEvent interface represents an UIEvent which is sent when the state of contacts with a touch-sensitive surface changes.  
<https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent>  
This surface can be a touch screen or trackpad, for example.  
The "click" event also responds to the touch of a smartphone or other device, but it is responded 300ms after the tap (about [this](https://www.html5rocks.com/en/mobile/touchandmouse/)).

- [Touch event types](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent#touch_event_types)

	There are several types of event that can be fired to indicate that touch-related changes have occurred.

	- touchstart

		Sent when the user places a touch point on the touch surface.  
		The event's target will be the element in which the touch occurred.

	- touchend

		Sent when the user removes a touch point from the surface.  that is, when they lift a finger or stylus from the surface.  
		This is also sent if the touch point moves off the edge of the surface.  
		for instance, if the user's finger slides off the edge of the screen.  

	- touchmove

		Sent when the user moves a touch point along the surface.  
		The event's target is the same element that received the touchstart event corresponding to the touch point, even if the touch point has moved outside that element.  
		This event is also sent if the values of the radius, rotation angle, or force attributes of a touch point change.

	- touchcancel

		Sent when a touch point has been disrupted in some way.  
		There are several possible reasons why this might happen (and the exact reasons will vary from device to device, as well as browser to browser).

		- An event of some kind occurred that canceled the touch.

			this might happen if a modal alert pops up during the interaction.

		- The touch point has left the document window and moved into the browser's UI area, a plug-in, or other external content.

		- The user has placed more touch points on the screen than can be supported, in which case the earliest Touch in the TouchList gets canceled.

## Modernizr

Modernizr tells you what HTML, CSS and JavaScript features the user’s browser has to offer.  
<https://modernizr.com/>  
It’s a collection of superfast tests – or “detects” as we like to call them – which run as your web page loads, then you can use the results to tailor the experience to the user.  
This documentation is [here](https://modernizr.com/docs).  

- Usage (for npm (or yarn))

	This time, extract the script related to the touch event.  

	1. npm (or yarn) install

		This time, we will add it to "devDependencies".

		```
		npm install --save-dev modernizr
		```

		or

		```
		yarn add --dev modernizr
		```

	2. Download the **modernizr-config.json** file for touch events from the [website](https://modernizr.com/download?setclasses)

		- **modernizr-config.json**
		```json
		{
			// minify is true is a short script, and false is a script as-is.
			"minify": false,
			"options": [
				"setClasses"
			],
			"feature-detects": [
				"test/touchevents"
			]
		}
		```

	3. Put on modernizr-config.json where you want to create the script, and execute the following command

		```sh
		./{Path to node_modules}/modernizr/bin/modernizr -c modernizr-config.json
		```

	4. The modernizr.js file will be generated!!

	5. Also, if you want to generate a script file that contains all the functions of modernizr, enter the following command ([GitHub](https://github.com/Modernizr/Modernizr/tree/v3.3.1))

		```
		./{Path to node_modules}/modernizr/bin/modernizr -c lib/config-all.json
		```

Also, I had to change the conditional branch of the script for touchevent as follows to make it work properly.

- Before modernizr.js (line 539)

	```js
	if (('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch) {
	```

- After modernizr.js (line 539)

	```js
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
	```

## BEM

BEM stands for Block Element Modifier and the CSS naming conventions in BEM are named **Block**, **Element**, and **Modifier** together.  
This is a way to connect Block and Element with **two underscores** and Element and Modifier with **two hyphens**.

```
block__element–-modifier
block__element__element–-modifier
```

## utility-first

In the traditional way, when you need to design something on the web, you use CSS.  
With the **utility-first** approach, you can style elements by applying existing classes directly to the HTML.  
One of the most common examples is [***tailwindcss***](https://tailwindcss.com/).

## Pace.js

Include pace.js and a CSS theme of your choice, and you get a beautiful progress indicator for your page load and ajax navigation.  
<https://codebyzach.github.io/pace/>  
No need to hook into any of your code, progress is detected automatically.  

## Swiper

Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior.  
<https://swiperjs.com/>  
It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.

- Installation (for npm (or yarn))

	- for npm

		```
		npm install swiper
		```
	
	- for yarn

		```
		yarn add swiper
		```

- Usage

	Write it using ES module.

	- html (index.html)

		```html
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
			<link rel="stylesheet" href="css/style.css">
		</head>
		<body>
			<!-- Slider main container -->
			<div class="swiper">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide">Slide 1</div>
					<div class="swiper-slide">Slide 2</div>
					<div class="swiper-slide">Slide 3</div>
					...
				</div>
				<!-- If we need pagination -->
				<div class="swiper-pagination"></div>

				<!-- If we need navigation buttons -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>

				<!-- If we need scrollbar -->
				<div class="swiper-scrollbar"></div>
			</div>
			<script type="module" src="js/main.js"></script>
		</body>
		</html>
		```

	- Sass (style.scss)

		```scss
		@import '{path to node_modules}/swiper/swiper-bundle.css';

		.swiper {
			width: 600px;
			height: 300px;
		}
		```

	- JS (main.js)

		```js
		import Swiper from '{path to node_modules}/swiper/swiper-bundle.esm.browser.min.js';

		const swiper = new Swiper('.swiper', {
			// Optional parameters
			//direction: 'vertical',
			loop: true,
			//effect: 'fade',
			effect: 'coverflow',
		
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		});
		```