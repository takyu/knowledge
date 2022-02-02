## Typical CSS Property

- ***html***
```html
<div id="container">
		<button class="btn">Button</button>
</div>
```

- ***CSS***
```css
#container {

	/* Center the button (inline element) */
	text-align: center;

}

.btn {

	/* Background color */
	background-color: white;

	/* text color */
	color: black;

	/* border: thickness shape color */
	border: 1px solid black;

	/* Margin inside the frame: Top Right Bottom Left */
	padding: 10px 40px 10px 40px;
	/* padding: TopBottom LeftRight */
	padding: 10px 40px;
	/* padding: TopBottomLeftRight */
	padding: 40px;

	/* Font thickness 100~900 */
	font-weight: 600;

	/* The cursor becomes a pointer when you approach the button */
	cursor: pointer;

	/* Margin outside the frame: Top Right Bottom Left */
	margin: 50px 0 50px 0;
	/* margin: TopBottom LeftRight */
	margin: 10px 40px;
	/* margin: TopBottomLeftRight */
	margin: 40px;

	/* character spacing */
	letter-spacing: 3px;

	/* make you look rounder */
	border-radius: 7px;
}
```

### !important

When an important rule is used on a style declaration, this declaration overrides any other declarations.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_!important_exception>  
Don't use "!important" too often, as it ignores the level of detail.

## Hover action Property

- ***html***
```html
<div id="container">
		<button class="btn">Button</button>
</div>
```

- ***CSS***
```css
#container {
	text-align: center;
}

.btn {
	background-color: white;
	color: black;
	border: 1px solid black;
	padding: 10px 40px;
	margin: 50px 0;
	font-weight: 600;
	cursor: pointer;

	/*
	Definition of transition
	transition: Part(property) Take seconds Tempo Seconds to start
	*/
	transition: all 1s ease 2s;
	/* 
	If you want to set them separately, separate them with ","
	*/
	transition: color 1s ease 2s,
				background-color 2s ease 3s;
}

/* Definition of the behavior when hovering */
.btn:hover {
	background-color: black;
	color: aqua;
}
```

## Saas

Sass is a preprocessor and is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.  
<https://sass-lang.com/documentation>

## Basic of Sass

Don't manipulate css files while you are manipulating Sass files.

- ***Sass***
```scss
// Variable
$cWhite: white;
$cBlack: black;
$cAqua: Aqua;

#container {
	text-align: center;

	/*
	"&" represents a parent element.
	However, it can be omitted if you want to be a child element
	within a parent element.
	*/

	// #container .btn
	.btn {
		background-color: red;
	}

}

.btn {
	background-color: $cWhite;
	color: $cBlack;
	border: 1px solid $cBlack;
	padding: 10px 40px;
	margin: 50px 0;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s;

	// .btn:hover
	&:hover {
		background-color: $cBlack;
		color: $cAqua;
	}

	/*
	String concatenation is possible.
	*/

	// .btn-cube
	&-cube {
		color: $cAqua;

		// .btn-cube .inner
		.inner {
			color: $cAqua;
		}
	}
}
```

### Chrome Debug when manipulate size and color

Using the inspection in Chrome, you can change the style at will and check it.  
For example, you can change the color, size, and so on.  
In case of changing size, there are useful shortcut keys.  

- Change in 0.1px increments
```
option + ↑↓
```

- Change in 10px increments
```
shift + ↑↓
```

- Change in 100px increments
```
command + ↑↓
```

## CSS Selector and Sass Nesting

- ***html***
```html
<div class="parent">
		親要素
		<div class="element">子要素</div>
		<div class="element second-child">子要素</div>
		<div class="element">
			子要素
			<div class="element">
				孫要素
			</div>
		</div>
</div>
```

- ***Sass***
```scss
.parent {
	color: blue;

	// Apply to child elements for the parent element
	> .element {
		color: purple;
		
		// If you want to specify as ".second-child" in ".elment",
		// write them without spaces.
		&.second-child {
			color: black;
		}
	}

	// Apply to descendant elements for the parent element
	// (including grandchildren).
	.element {
		color: black;
	}
}

.element {
	color: red;
}
```

## Shadowed on hover

- ***html***
```html
<div id="container">
		<button class="btn float">Button</button>
</div>
```

- ***Sass***
```scss
$cBlack: black;
$cWhite: white;

#container {
	text-align: center;
}

.btn {
	background-color: $cWhite;
	color: $cBlack;
	border: 1px solid $cBlack;
	padding: 10px 40px;
	margin: 50px 0;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s;

	&.float {
		&:hover {

			/*
			It can freely create shadows on the outside and inside of elements.
			If you want to add an inner shadow, specify "inset".
			box-shadow: (inset) Xoffset Yoffset Blue Spread color
			*/
			box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);

		}
	}
}
```

### Vender Prefix

It's a prefix that can be added to implement extensions to CSS properties in different browsers.  
<https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix>  
Typical CSSPrefixes include the following.
```
-webkit- (Chrome, Safari, newer versions of Opera, almost all iOS browsers including Firefox for iOS; basically, any WebKit based browser)

-moz- (Firefox)

-o- (old pre-WebKit versions of Opera)

-ms- (Internet Explorer and Microsoft Edge)
```

## Transform Property

"Transform" is CSS property to let you rotate, scale, skew, or translate an element.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/transform>  

- ***html***
```html
<div id="container">
		<div class="rect"></div>
</div>
```

- ***Sass***
```scss
.rect {
	width: 100px;
	height: 100px;

	/*
	Centering a div (block element).
	When centering with "margin: 0 auto", the width must be set.
	*/
	margin: 0 auto;

	background-color: orangered;

	/*
	Move the element.
	transform: tranlate(Xoffset, Yoffset)
	Specify "px" and "%".
	If 100% is specified, it will move the size of the specified element.
	*/
	transform: translate(50px, 50px);

	// To move only in the Xoffset
	transform: translateX(50px);
	// To move only in the Yoffset
	transform: translateY(100%);

	/*
	Rotate an element.
	Specify "deg" (for degree).
	A value of + rotates the element clockwise,
	and a value of - rotates it counterclockwise.
	*/
	transform: rotate(30deg);
	transform: rotate(-30deg);

	/*
	Deforms the element by tilting it.
	Specify "deg".
	*/
	transform: skew(-30deg, -30deg);

	// To tilt only in the Xoffset
	transform: skewX(-30deg);
	// To tilt only in the Yoffset
	transform: skewY(-30deg);

	/*
	Zoom in or out on an element.
	Specify number.
	*/
	transform: scale(3, 2);

	// To zoom in or out only in the Xoffset
	transform: scale(3);
	// To zoom in or out only in the Yoffset
	transform: scale(2);
	/*
	If you want to specify more than one transform,
	list them with half-width spaces between them.
	*/
	transform: translateX(50px) scaleY(2);
	
	/*
	When used in conjunction with"transform",
	you can specify the center point of rotation.
	Specify "point" and "px"
	The dots can be "top," "bottom," "center," "right," or "left.
	Use a combination of two of them.
	When "px" is used, the reference point is the Xoffset and Yoffset
	based on the top-left point of the element.
	*/

	// upper left
	transform-origin: top left;
	// Lower right
	transform-origin: bottom right;
	// middle point
	transform-origin: center center;
	// From the upper left, 20px to the left and 20px to the top
	transform-origin: -20px -20px;

}
```

## Position and Z-index Property

Use "position" to adjust the position, and "z-index" to specify the overlap of elements.

## Position

"Position" is Used to move an element to a fixed position on the screen, or to display an element fixedly at a specific position.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/position>  
The five properties of a position are as follows.  

- **static**

**static** is The default value assigned to the position by the browser.

- **relative**

**relative** is set when taking a position relative to the currently displayed position.  
Therefore, even if **relative** is set, the display will not change from the current position.  
However, setting **relative** has two major differences compared to setting **static**.  

1. If the child element has **absolute**, the element cannot be placed in the intended location unless **relative** is set for the parent element. (In the case of **static**, the root element of the document(<html>) is recognized as the parent element, the element will be placed at the specified position ("top", "bottom", "left", and "right" properties) as seen by the entire browser.).

2. If you want to use z-index to change the priority and put it to the front.

- **absolute**

**absolute** will be displayed at the absolute position from the top-left of the parent element if the position of the parent element is set to **relative**.  
Also, the height of the parent element will be 0.

- **fixed**

**fixed** is fixed to a specific position in the browser window.  
**fixed** is used when you want to display a menu bar or social buttons that do not change position even when scrolling.

- **sticky**

**sticky** is to move within the parent element while maintaining the specified position("top", "bottom", "left", and "right" properties).  
An element with **sticky** set will follow its parent element's range, keeping its position even when scrolled.  
Also, if the parent element has "overflow: hidden;" set, it will not follow.

## Z-index

When multiple elements overlap, you can determine which element comes to the forefront.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/z-index>  
The element with the higher number will come to the front.  
The position must be set to something other than static.  
Also, if the z-index is set to "auto", it is the same as the integer value of 0.

## The stacking context

The stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context>  
The stacking context is composed when the position is not "static" and the z-index is assigned. (If key is **auto**, it's not composed.)  
There are two types of stacking contexts, one is the "root stack context" that HTML has, and the other is the "local stack context" that is created when a condition in which the position is not static and the z-index is assigned is met.

- html

```html
<section id="container">
	<div class="div-1" id="">div 1</div>
	<div class="div-2" id="">div 2</div>
	<div class="div-3" id="">
		div 3
		<div class="div-4">
			div 4
		</div>
	</div>
</section>
```

- Sass

```scss
#container {
	padding: 1rem;
	position: relative;
}

/*
	The order in which they appear in the front is
	.div-4 -> .div-3 -> .div-2 -> .div-1
*/
div {
	font-weight: 600;
	padding: 0.5rem;
	font-size: 1.1em;
	width: 150px;
	height: 150px;
	box-shadow: 7px 7px 0 0 #000;
}
.div-1 {
	background: orange;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
}
.div-2 {
	background: tomato;
	position: relative;
	z-index: 3;
}
.div-3 {
	background: teal;
	position: absolute;
	top: 40px;
	left: 40px;
	z-index: 4;
}
.div-4 {
	width: 80px;
	height: 80px;
	background-color: violet;
	position: relative;
	z-index: 1;
}
```

The z-index of .div-4 represents the priority in the local stack context in .div-3 because it satisfies the condition that the local stack context is created in .div-3.  
Therefore, even if the z-index is the lowest, .div-4 will be displayed in front of .div-3 because .div-3 is the highest in the root stack context.

## Pseudo-elements

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).  
<https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements>  
There is no need to create elements just for styles, so we use pseudo-element.  
When using pseudo-element, the **"content" property** must be used.  
Be sure to pass "''(empty character)" as the key even when the "content" of property in pseudo-element is not necessary, such as filling with a background color.  
In the pseudo-element, we will assume that an empty <span> tag has been inserted, and apply the style.  
There is only one "before::" and one "after::" that can be applied to the same HTML element.  
"before::" and "after::" cannot be applied to the empty tag.  
The difference between "before::" and "after::" is whether it is inserted before or after the element.  
However, when using "::before" and "::after", "position:absolute" is often used in conjunction with them, and in such cases there is no particular difference between "::before" and "::after".

## a.k.a easing-function

It can be set as the third argument of the transition property.  
<https://www.kirupa.com/html5/timing_functions.htm>  
Find the element to which you have applied the transition property in the debugging section of your inspect tool, such as Chrome, and select the graph next to "ease" in the key of the transition property.  
The graph shows the **property value** on the vertical axis and the **specified time** on the horizontal axis, so you can adjust the beginning and end of the graph to give the element ***a slower or faster pace***.

## transform-style

The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style>  
Be sure to write the properties and keys "**transform-style: preserve-3d;**" and "**perspective: 100px(any value);**" for the parent element of the child element to which you want to apply 3D.  
Basically, "overflow:hidden" and 3d "transform" should not be used together.  
The reason for this is that if you specify overflow:hidden, transform-style: flat will be used, and this will cause unintended behavior.

- html

```html
<span class="parent_elment">
	<span></span>
</span>
```

- Sass

```scss
// Parent elements to apply
.parent_elment {
	/*
	Write 3D into the parent element of the child element you want to put 3D into.
	*/
	transform-style: preserve-3d;
	/*
	Depth.
	Roughly 300px (close) to 1000px (far).
	*/
	perspective: 100px;
	/*
	Specify where to place the viewpoint.
	If you don't specify anything, use the default value, 50% 50% (directly in front).
	perspective-origin: Xoffset(X-offset-keyword) Yoffset(Y-offset-keyword)
	*/
	perspective-origin: 50% 50%;
	// left-front
	perspective-origin: -100% 50%;

	// Display animation of rotation from minus direction.
	background-color: transparent;

	/*
	If there are no overlapping elements, the z-index will be ignored.
	→ z-index has no effect when 3D animation is running.
	Use "transform: translateZ()" to define the order of overlap in 3D space
	(whether the screen of the original element is in front or behind) during 3D animation.
	Also, the transform property can only be applied to block elements, so use the disply property to change it to a block element.
	*/
	span {
		display: inline-block;
		transform: translateZ(10px);
	}

	// Child elements to apply
	&::before {

		/* 
		Specify how many axes to rotate.
		Specify degree.
		*/
		transform: rotateX(90deg);

		/* 
		Specify the center axis of rotation.
		transform-origin: Xoffset(X-offset-keyword) Yoffset(Y-offset-keyword) (Z-offset);
		*/
		transform-origin: top center;

		// Remove the visible part of the animation before execution.
		opacity: 0;
	}
}
```

## Horizontal layout

Note that the way to write for inline elements and block elements is different.  

- html

```html
<div class="parent">
	<div class="child v1">child</div>
	<div class="child v2">child2</div>
	<div class="child v3">child3</div>
</div>
```

- Sass

```scss
$cGray: gray;
$cOrange: orange;
$cRed: red;
$cBlue: blue;
$cWhite: white;

.parent {
	background-color: $cGray;
	width: 100%;
	height: 600px;
}

.child {
	background-color: $cOrange;
	color: $cWhite;
	width: 100px;
	height: 100px;
	font-weight: 600;
	
	&.v2 {
		background-color: $cRed;
	}
	&.v3 {
		background-color: $cBlue;
	}
}

/* Inline element centering */
.parent {
	text-align: center;

	// Remove line spacing from element
	letter-spacing: -6px;
}
.child {
	display: inline-block;
}

/* Block element centering */
.parent {
}
.child {
	margin: 0 auto;
}
```

## Vertical layout

Use the "position" property if you want to display the elements overlapped on top of each other, or use the "[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)" property if you want to display the elements without overlapping them.  

- html

```html
<div class="parent">
	<div class="child v1">child</div>
	<div class="child v2">child2</div>
	<div class="child v3">child3</div>
</div>
```

- Sass (overlap)

```scss
$cGray: gray;
$cOrange: orange;
$cRed: red;
$cBlue: blue;
$cWhite: white;

.parent {
	background-color: $cGray;
	width: 100%;
	height: 600px;

	position: relative;

}

.child {
	background-color: $cOrange;
	color: $cWhite;
	width: 100px;
	height: 100px;
	font-weight: 600;
	
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	&.v2 {
		background-color: $cRed;
	}
	&.v3 {
		background-color: $cBlue;
	}
}
```

- Sass (Don't overlap)

```scss
$cGray: gray;
$cOrange: orange;
$cRed: red;
$cBlue: blue;
$cWhite: white;

.parent {
	background-color: $cGray;
	width: 100%;
	height: 600px;

	display: flex;
	
	/*
	Aligned vertical.
	In case of not reversing elements and aligning them, It can be optional.
	*/
	flex-direction: row;
	// reversing elements and aligning them
	flex-direction: row-reverse;

	/*
	Setting Alignment for Left and Right.
	justify-content: position
	*/
	// Left
	justify-content: flex-start;
	// Center
	justify-content: center;
	// Right
	justify-content: flex-end;
	// Evenly space between child elements.
	justify-content: space-around;
	// Both ends of the child elements are packed and it spaced evenly.
	justify-content: space-between;

	/* 
	Setting Alignment for Top and Bottom.
	align-items: position;
	*/
	// Top
	align-items: flex-start;
	// Center
	align-items: center;
	// Bottom
	align-items: flex-end;

	/* 
	Aligned horizontal.
	Note that the roles of "justify-content" and "align-items" are reversed 
	when changing to vertical alignment.
	*/
	flex-direction: column;
	// reversing elements and aligning them
	flex-direction: column-reverse;

	/* 
	When the flex-basis property isn't each child element to have the desired size, display on a new line.
	*/
	flex-wrap: wrap;
}
.child {
	background-color: $cOrange;
	color: $cWhite;
	font-weight: 600;
	&.v2 {
		background-color: $cRed;
	}
	&.v3 {
		background-color: $cBlue;
	}

	/*
	Each child element is divided to equally fill the parent element.
	By setting a ratio for each child element,
	each child element is set to that ratio based on the parent element.
	flex-grow: ratio;
	*/
	&.v1 {
		flex-grow: 1;
	}
	&.v2 {
		flex-grow: 2;
	}
	&.v3 {
		flex-grow: 3;
	}
	
	/* 
	You can specify the size you want to reserve for a single child element.
	flex-basis: px;
	*/
	&.v1 {
		flex-basis: 300px;
	}

	/*
	Set it for all child elements, and if it can't be,
	each one will compromise to get an equal width.
	*/
	flex-basis: 300px;

	/* 
	If you want to set the flex-basis property for all child elements
	and ensure that the size is a particular child element within that child element without compromise,
	specify "flex-shrink: 0;" for that child element.
	*/
	&.v1 {
		flex-shrink: 0;
	}
}
```
