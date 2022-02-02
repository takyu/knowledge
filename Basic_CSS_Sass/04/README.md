## border-radius

The border-radius CSS property rounds the corners of an element's outer border edge.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius>  
You can set a single radius to make circular corners, or two radii to make elliptical corners.

```scss
/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;
```

## Animation Properties

- [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

	The animation shorthand CSS property applies an animation between styles.
	```scss
	animation: [keyframes_property];
	```
	Basically, just write the name of the **keyframes_property** and adjust it with other animation properties.

- [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)

	The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.
	```scss
	animation-duration: [seconds];
	```
	Seconds specify seconds (s) or milliseconds (ms).  
	The time that an animation takes to complete one cycle.

- [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

	The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.
	```scss
	/* increases in velocity towards the middle of the animation, slowing back down at the end */
	animation-timing-function: ease;

	/* starts off slowly, with the speed of the transition of the animating property increasing until complete */
	animation-timing-function: ease-in;

	/* starts quickly, slowing down the animation continues */
	animation-timing-function: ease-out;

	/* with the animating properties slowly transitioning, speeding up, and then slowing down again */
	animation-timing-function: ease-in-out;

	/* animates at an even speed */
	animation-timing-function: linear;
	```

- [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)

	The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation.
	```scss
	animation-delay: [seconds];
	```
	Seconds specify seconds (s) or milliseconds (ms).   
	A negative value causes the animation to beginimmediately, but partway through its cycle.

- [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)

	The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping.
	```scss
	animation-iteration-count: [value];
	```
	Values specify seconds (s) or Keyword (e.g. infinite).

- [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)

	The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
	```scss
	/* 0% -> 100% */
	animation-direction: normal;

	/* 100% -> 0% */
	animation-direction: reverse;

	/* 0% -> 100%, 100% -> 0% */
	animation-direction: alternate;

	/* 100% -> 0%, 0% -> 100% */
	animation-direction: alternate-reverse;
	```

- [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)

	The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.
	```scss
	/* Not be both to leave and to apply animation */
	animation-fill-mode: none;

	/* Leave animation at the end */
	animation-fill-mode: forwards;

	/* Apply animation at the start */
	animation-fill-mode: backwards;

	/* Apply and leave animation to both start and end */
	animation-fill-mode: both;
	```

- [animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)

	The animation-play-state CSS property sets whether an animation is running or paused.
	```scss
	/* The animation is currently playing */
	animation-play-state: running;

	/* The animation is currently paused */
	animation-play-state: paused;
	```

## @keyframes

The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes>  
This gives more control over the intermediate steps of the animation sequence than transitions.
```scss
@keyframes [keyframes_property] {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

- Values

	- [keyframes_property]
	
		A name identifying the keyframe list.  
		This must match the identifier production in CSS syntax.

	- from

		A starting offset of 0%.

	- to

		An ending offset of 100%.

	- percentage

		A percentage of the time through the animation sequence at which the specified keyframe should occur.
		```scss
		@keyframes sk-bouncedelay {
			0% {
				transform: scale(0)
			}

			50% {
				transform: scale(2);
			}

			// Multiple percents are possible.
			0%, 50% {
				transform: scale(2);
			}

			100% {
				transform: scale(1)
			}
		}
		```

## @mixin

@mixin allows you to define styles that can be re-used throughout your stylesheet.  
<https://sass-lang.com/documentation/at-rules/mixin>


```scss
@mixin animation-conf (
	$name,

	// default value
	$duration: 1s,
	$timing-function: ease,
	$delay: 0s,
	$iteration-count: 1,
	$direction: normal,
	$fill-mode: none
) {
	/*
	If the properties have the same prefix,
	the prefix is the name of the object, and the property name
	without the prefix is written as the name of the property in the object.
	*/
	animation: {
		name: $name;
		duration: $duration;
		timing-function: $timing-function;
		delay: $delay;
		iteration-count: $iteration-count;
		direction: $direction;
		fill-mode: $fill-mode;
	}
}

.class_name {
	display: inline-block;
	width: 100px;
	height: 100px;
	background-color: $cBlack;
	@include animation-conf (
		$name: sk-bouncedelay,
		$fill-mode: forward
	);
}
```

## Pseudo-classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).  
<https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes>  
For example, :hover can be used to change a button's color when the user's pointer hovers over it.  
There are many pseudo-classes, but the following are seven of the most commonly used classes.

- [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)

	The :hover CSS pseudo-class matches when the user interacts with an element with a pointing device, but does not necessarily activate it.  
	It is generally triggered when the user hovers over an element with the cursor (mouse pointer).

- [:visited](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)

	The :visited CSS pseudo-class represents links that the user has already visited.  
	For privacy reasons, the styles that can be modified using this selector are very limited.

- [:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

	The :focus CSS pseudo-class represents an element (such as a form input) that has received focus.  
	It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's Tab key.

- [:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

	The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.  
	When using a mouse, "activation" typically starts when the user presses down the primary mouse button.

- [:nth-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

	The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.
	```scss
	// Select the third & element
	&:nth-child(3) {
		color: $cPurple;
	}

	// select the even-numbered & element
	&:nth-child(even) {
		color: $cPurple;
	}

	// select the odd-numbered & element
	&:nth-child(odd) {
		color: $cPurple;
	}

	// select every third & element
	&:nth-child(3n) {
		color: $cPurple;
	}

	// select every fourth & element (Including the first element)
	&:nth-child(4n + 1) {
		color: $cPurple;
	}

	// Select the first & element
	&:first-child {
		color: $cPurple;
	}

	// Select the last & element
	&:last-child {
		color: $cPurple;
	}
	```

- [:nth-of-type()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)

	The :nth-of-type() CSS pseudo-class matches elements **of a given type (tag name)**, based on their position among a group of siblings.

- [:not()](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

	The :not() CSS pseudo-class represents elements that do not match a list of selectors.  
	Since it prevents specific items from being selected, it is known as the negation pseudo-class.

## @for

It counts up or down from one number (the result of the first expression) to another (the result of the second) and evaluates a block for each number in between.  
<https://sass-lang.com/documentation/at-rules/control/for>  
Each number along the way is assigned to the given variable name.  
If **to** is used, the final number is excluded; if **through** is used, it's included.

```scss
@for <variable> from <expression> to <expression> { ... }
@for <variable> from <expression> through <expression> { ... }
```

## Interpolation

Interpolation can be used in SassScript to inject SassScript into unquoted strings.  
<https://sass-lang.com/documentation/interpolation>  
This is particularly useful when dynamically generating names (for example for animations), or when using slash-separated values.  
Note that interpolation in SassScript always returns an unquoted string.  
Therefore, when used in a formula, if the variable has a unit, it will be used as is.  
In addition, Sass allows you to include units in calculations (px, %, etc.).

```scss
#{$val_name}
```

## @import

Sass extends CSS's @import rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together.  
<https://sass-lang.com/documentation/at-rules/import>  
Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation.  

- Partial SCSS files (Partials)

	You can prevent the Sass processor from compiling the file itself into CSS by naming the SCSS files you import and use starting with an underscore (_).  
	When reading this file, fill in the file name without the leading underscore and extension.
	
	```scss
	// scss file name -> _hoge.scss
	@import 'hoeg';
	```

## CSS values and units

Every property used in CSS has a value type defining the set of values that are allowed for that property.  
<https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units>  
In particular, there are two types of lengths: "**Absolute length units**" and "**Relative length units**", with Relative length units shown below.

| Unit | Relative to |
| :---: | :---: |
| **em** | Font size of the parent.<br>**%** as well. |
| **rem** | Font size of the root element. |
| ex | x-height of the element's font. |
| ch | The advance measure (width) of the glyph "0"<br>of the element's font. |
| lh | Line height of the element. |
| **vw** | 1% of the viewport's width. |
| **vh** | 1% of the viewport's height. |
| vmin | 1% of the viewport's smaller dimension. |
| vmax | 1% of the viewport's larger dimension. |

## Viewport units

The viewport which is the visible area of your page in the browser you are using to view a site, also has a size.  
<https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS#viewport_units>  
In CSS we have units which relate to the size of the viewport.  
the ***vw*** unit for viewport width, and ***vh*** for viewport height.  
Using these units you can size something relative to the viewport of the user.  
1vh is equal to 1% of the viewport height, and 1vw is equal to 1% of the viewport width.  
Therefore, **100vh** is equal to 100% of the viewport height, and **100vw** is equal to 100% of the viewport width.  
However, since block elements do not need to have a width of 100vw, but spread out 100% (or more precisely, 100% of the width of the parent element), they do not need to be specified.  
See [this site](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS#viewport_units) for instructions on how to set other sizes.

## Google Fonts

Google Fonts is a free font directory service provided by Google, released in 2010.  
<https://fonts.google.com/>  
It is used around the world to display fonts on web pages by reading font data from Google's servers.  
Use it by loading it in HTML or CSS and setting its properties in CSS.

## Maps

Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key.  
<https://sass-lang.com/documentation/values/maps>  
They’re written ```(<expression>: <expression>, <expression>: <expression>)```.  
The expression before the **:** is the key, and the expression after is the value associated with that key.  
The keys must be unique, but the values may be duplicated.

```scss
$val: (
	"bar": "BAR",
	"foo": "FOO",
	"hoge": "HOGE"
)
```

## @each

The @each rule makes it easy to emit styles or evaluate code for each element of a list or each pair in a map.  
<https://sass-lang.com/documentation/at-rules/control/each>  
It’s great for repetitive styles that only have a few variations between them.  
It’s usually written ```@each <variable> in <expression> { ... }```, where the expression returns a list.  
The block is evaluated for each element of the list in turn, which is assigned to the given variable name.

- With Maps

	You can also use @each to iterate over every key/value pair in a map by writing it ```@each <variable>, <variable> in <expression> { ... }```.  
	The key is assigned to the first variable name, and the element is assigned to the second.
	```scss
	$colors: (
		"red": #FF0000,
		"blue": #0000FF,
		"green": #008000
	);

	@each $key, $value in $colors {
		.div-#{$key} {
			background-color: $value;
		}
	}
	```


## How to display images

There are three ways to display an image: **\<image> tag**, **\<picture> tag**, and **background-image** using CSS properties.

## \<img>: The Image Embed element

The <img> HTML element embeds an image into the document.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img>  

```html
<body>
	<img src="filepath" alt="description">
</body>
```

- src

	The src attribute is required, and contains the path to the image you want to embed.

- alt

	The alt attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility.  
	screen readers read this description out to their users so they know what the image means.  
	Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.  
	Also, it is essential for SEO as Google's search engine goes to read this alt attribute.

## background-image

The background-image CSS property sets one or more background images on an element.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/background-image>  
When specifying a div element, it is necessary to specify the height. (The default value is zero height.)

```scss
div {
	background-image: url('filepath');

	/* 
	If the specified size is larger than the original background image,
	the image will be repeated (default).
	*/
	height: 500px;

	// turn off image repeat
	background-repeat: no-repeat;

	/*
	displayed according to the div element
	(aspect ratio is preserved)
	*/
	background-size: cover;

	/* 
	If the browser screen is smaller than the div element when it is aligned with it,
	it will be trimmed and some of the edges will be displayed.
	To prevent this, you can display it to the middle.
	*/
	background-position: center;

	/* 
	Display the background image without trimming it according to the browser size.
	However, there will be margins caused by divs. (Not often used.)
	*/
	background-size: contain;
}
```

## \<img> v.s. background-image

In the \<img> tag, if the style was set to a different size than the original image, the aspect ratio was broken and the image was distorted.  
However, by applying the "object-fit" property, you can achieve the same behavior as setting the property on the background-image as follows.

```scss
.bg-img {
	width: 300px;
	height: 500px;
	background-image: url(filepath);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

img {
	width: 300px;
	height: 500px;
	object-fit: cover;
}
```

## \<picture>: The Picture element

The \<picture> HTML element contains zero or more \<source> elements and one \<img> element to offer alternative versions of an image for different display/device scenarios.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture>

```html
<picture>
	<source srcset="filepath"
		media="(min-width: 800px)">
	<img src="another_filepath" alt="" />
</picture>
```

The browser will consider each child \<source> element and choose the best match among them.  
If no matches are found or the browser doesn't support the \<picture> element—the URL of the \<img> element's src attribute is selected(e.g. IE11).  
The selected image is then presented in the space occupied by the \<img> element.

## \<img> v.s. \<picture>

If you want to switch images strictly depending on the size of the browser, use the <picture> tag (art direction) .  
If you just want to display the same image in a scaled-down format, specify the srcset property in the <img> tag.  
The difference between the two description methods is that srcset gives the browser a choice depending on the situation, while picture does not give the browser a choice.  
Therefore, use the \<picutre> tag when you want to change the image format to be loaded depending on the browser, or when you want to switch images beyond mere size differences, and apply the srcset property to \<img> when you just want to switch duplicate images of different sizes (resolutions) depending on the device environment.  

- Use srcset in \<ime> tag

```html
<!-- 
	If the width of your browser is less than 400px, find the smallest image that will fit 400px.
	→Select "small.png

	If the width of your browser is 640px or less, find the smallest image that fits 640px.
	→Choose medium.png.

	If the width of your browser is 1024px or less, find the smallest image that fits 1024px.
	→Choose large.png.

	If the width of the browser is more than 1024px, find the largest image in the srcset.
	→Select "large.png".
-->
<img src="large.png"
	srcset="
		small.png 400w,
		medium.png 640w,
		large.png 1024w"
/>
<!-- 
	w (width of the image)
	h (height of the image)
	x (device pixel ratio)
-->
```

- Use \<picture> tag

```html
<!-- 
	If the width of your browser is less than 400px
	→ Force the browser to "use small.png".

	If the width of the browser is 640px or less
	→ Force the browser to "use medium.png".

	If the width of the browser is less than 1024px
	→Force the browser to "use large.png".

	If none of the above apply
	→ Force the browser to "use large.png".
 -->
<picture>
	<source media="(max-width: 400px)" srcset="small.png" />
	<source media="(max-width: 640px)" srcset="medium.png" />
	<source media="(max-width: 1024px)" srcset="large.png" />
	<img src="large.png" />
</picture>
```

Also, the use of the srcset property in the image tag has been applied since HTML5, and before that, the **@media query** was used in CSS.

## @media

The @media CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/@media>  
With it, you specify a media query and a block of CSS to apply to the document if and only if the media query matches the device on which the content is being used.

```css
@media Media_types and Media_features { 
	/* styles to be specified */
}
```

- Media_types

	- all

		Suitable for all devices.

	- print

		Intended for paged material and documents viewed on a screen in print preview mode.

	- screen

		Intended primarily for screens.

	- speech

		Intended for speech synthesizers.

- Media_types

	Media features describe specific characteristics of the user agent, output device, or environment (e.g. min-width, display etc.)

The example is as follows.

```css
div {
	background-image: url(large.png);
}

@media screen and (min-width: 400px) {
	div {
		background-image: url(small.png);
	}
}
@media screen and (min-width: 640px) {
	div {
		background-image: url(medium.png);
	}
}
@media screen and (min-width: 1024px) {
	div {
		background-image: url(large.png);
	}
}
```

## Viewport concepts

A viewport represents the area in computer graphics being currently viewed.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts>  
In web browser terms, it is generally the same as the browser window, excluding the UI, menu bar, etc.  
That is the part of the document you are viewing.  
The value of the media query is determined based on the value set in the viewport.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## @extend

There are often cases when designing a page when one class should have all the styles of another class, as well as its own specific styles.  
Sass’s @extend rule solves this.  
<https://sass-lang.com/documentation/at-rules/extend>  
it tells Sass that one selector should inherit the styles of another.

```scss
@extend <selector>
```

## Rendering

Rendering is to the process of depicting the browser.  
<https://leap-in.com/ja/lets-learn-how-to-browser-works/>  
In order to reduce the load on the browser rendering, it is recommended to rewrite the layout operations into style operations.  
The specifics are as follows.

- Move the position

	- <span style="color: green;">recommended</span>

		```scss
		transform: translate
		```

	- <span style="color: red;">deprecated</span>

		```scss
		top, left, bottom, right, margin, padding
		```
- Change the size

	- <span style="color: green;">recommended</span>

		```scss
		transform: scale
		```

	- <span style="color: red;">deprecated</span>

		```scss
		height, width, padding
		```

- Change the opacity

	- <span style="color: green;">recommended</span>

		```scss
		opacity
		```
	
	- <span style="color: red;">deprecated</span>

		```scss
		rgba
		```