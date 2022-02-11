# Bootstrap

Bootstrap is a CSS framework that also supports responsive design.  
Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.  
<https://getbootstrap.com/>

## detail

1. [Installation and Usage](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/01)

2. [Variable defaults](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/02)

3. [Grid system](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/03)

4. [Create header of form](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/04)

5. [Create main(form part) and footer of form](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/05)

6. [Create Topic creation](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/06)

7. [Create Past Posts](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/07)

8. [Create Comment List](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/08)

9. [Create Topic details](https://github.com/takyu/knowledge/tree/main/Framework_Bootstrap/09)

## Installation

Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.  
<https://getbootstrap.com/docs/5.1/getting-started/download/>  
This time, Install Bootstrap with the npm package, the yarn package, and composer.

- the npm package

```sh
npm install bootstrap
```

- the yarn package

```sh
yarn add bootstrap
```

- Composer

```sh
composer require twbs/bootstrap:5.1.3
```

## Usage

1. Since we will be developing using only Sass files in Bootstrap, write ```@import "[relative path to node_modules]/node_modules/bootstrap/scss/bootstrap.scss";``` for the Sass file you want to apply.

2. Write the class in the HTML tag to which you want to apply the style.

## Variable defaults

Every Sass variable in Bootstrap includes the **!default** flag allowing you to override the variable’s default value in your own Sass without modifying Bootstrap’s source code.  
Copy and paste variables as needed, modify their values, and remove the **!default** flag.  
If a variable has already been assigned, then it won’t be re-assigned by the default values in Bootstrap.  
<https://getbootstrap.com/docs/5.1/customize/sass/#variable-defaults>

## Grid system

Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.  
<https://getbootstrap.com/docs/5.1/layout/grid/>

## Grid options

Bootstrap’s grid system can adapt across all six default breakpoints, and any breakpoints you customize.  
breakpoints is the min-width of @media in css.  
The six default grid tiers are as follows.

- Extra small (xs)

- Small (sm)

- Medium (md)

- Large (lg)

- Extra large (xl)

- Extra extra large (xxl)


|  | xs<br><576px | sm<br>≥576px | md<br>≥768px | lg<br>≥992px | xl<br>≥1200px | xxl<br>≥1400px |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Container max-width | None (auto) | 540px | 720px | 960px | 1140px | 1320px |
| Class prefix | .col- | .col-sm- | .col-md- | .col-lg- | .col-xl- | .col-xxl- |
| of columns | 12 | 12 | 12 | 12 | 12 | 12 |
| Gutter width | 1.5rem<br>(.75rem on left and right) | 1.5rem<br>(.75rem on left and right) | 1.5rem<br>(.75rem on left and right) | 1.5rem<br>(.75rem on left and right) | 1.5rem<br>(.75rem on left and right) | 1.5rem<br>(.75rem on left and right) |
| Custom gutters | Yes | Yes | Yes | Yes | Yes | Yes |
| Nestable | Yes | Yes | Yes | Yes | Yes | Yes |
| Column ordering | Yes | Yes | Yes | Yes | Yes | Yes |

To customize breakpoints, rewrite the value of the property in **$grid-breakpoints**.

```scss
$grid-breakpoints: (
	xs: 0,
	sm: 200px,
	md: 400px,
	lg: 600px,
	xl: 800px,
	xxl: 1000px
)
```

**$grid-breakpoints** is locate in the _variables.scss file in the scss directory in the bootstrap directory.

```scss
// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

// scss-docs-start grid-breakpoints
$grid-breakpoints: (
	xs: 0,
	sm: 576px,
	md: 768px,
	lg: 992px,
	xl: 1200px,
	xxl: 1400px
) !default;
// scss-docs-end grid-breakpoints
```

To customize Container max-width, rewrite the value of the property in **$container-max-widths**.

```scss
$container-max-widths: (
  sm: 160px,
  md: 680px,
  lg: 900px,
  xl: 1100px,
  xxl: 1250px
);
```

**$container-max-widths** is locate in the _variables.scss file in the scss directory in the bootstrap directory.

```scss
// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

// scss-docs-start container-max-widths
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
) !default;
// scss-docs-end container-max-widths
```

## Site creation order

1. To be able to change it later as many times as you want, create a div tag(#container) inside the body tag and write in it.

2. Based on HTML semantics, divide into header tag, body tag, and footer tag.

3. Always add "container" to the class name where you want to apply the bootstrap style.

```html
<body>
	<div id="container">
		<header>
			<!-- title part -->
		</header>
		<main>
			<!-- body part -->
		</main>
		<footer>
			<!-- annotation part -->
		</footer>
	</div>
</body>
```

header tag, body tag, and footer tag are functionally classified as div tags.

## \<nav>

The \<nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav>  
Common examples of navigation sections are menus, tables of contents, and indexes.  
nav tag is also functionally classified as div tags.

## \<a>

The \<a> SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL.  
<https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a>  
It is very similar to HTML’s \<a> element.  
SVG's \<a> element is a container, which means you can create a link around text (like in HTML) but also around any shape.

```html
<a href="filepath, hyperlink, etc..">
```

## Columns

modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system.  
<https://getbootstrap.com/docs/5.1/layout/columns/#standalone-column-classes>  
Also, use column classes to manage widths of non-grid elements.

## Flex

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.  
<https://getbootstrap.com/docs/5.1/utilities/flex/#enable-flex-behaviors>  
For more complex implementations, custom CSS may be necessary.

## Font size

Quickly change the font-size of text. While our heading classes (e.g., .h1–.h6) apply font-size, font-weight, and line-height, these utilities only apply font-size.  
<https://getbootstrap.com/docs/5.1/utilities/text/#font-size>  
Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.

```html
<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>
```

To customize font-sizes, rewrite the value of the property in **$font-sizes**.

```scss
$font-sizes: (
  1: 0.5rem,
  2: 1.0rem,
  3: 1.5rem,
  4: 2.0rem,
  5: 2.5rem,
  6: 3.0rem
);
```

**$font-sizes** is locate in the _variables.scss file in the scss directory in the bootstrap directory.

```scss
// scss-docs-start font-sizes
$font-sizes: (
	1: $h1-font-size,
	2: $h2-font-size,
	3: $h3-font-size,
	4: $h4-font-size,
	5: $h5-font-size,
	6: $h6-font-size
) !default;
// scss-docs-end font-sizes
```

## Font weight and italics

Quickly change the font-weight or font-style of text with these utilities. font-style utilities are abbreviated as **.fst-\*** and font-weight utilities are abbreviated as **.fw-\***.  
<https://getbootstrap.com/docs/5.1/utilities/text/#font-weight-and-italics>

## Spacing

Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.
<https://getbootstrap.com/docs/5.1/utilities/spacing/#margin-and-padding>  
Includes support for individual properties, all properties, and vertical and horizontal properties.  
Classes are built from a default Sass map ranging from .25rem to 3rem.

```
{property}{sides}-{breakpoint}-{size}
```

- property

	- m

		for classes that set margin

	- p

		for classes that set padding
		
- sides

	- t 

		for classes that set margin-top or padding-top

	- b

		for classes that set margin-bottom or padding-bottom

	- s
	
		(start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL

	- e 
	
		(end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL

	- x
	
		for classes that set both *-left and *-right

	- y
	
		for classes that set both *-top and *-bottom

	- blank
	
		for classes that set a margin or padding on all 4 sides of the element
		
- breakpoint

	| name | size |
	| :---: | :---: |
	| xs | <576px |
	| sm | ≥576px |
	| md | ≥768px |
	| lg | ≥992px |
	| xl | ≥1200px |
	| xxl | ≥1400px |
	
- size

	- 0
	
		for classes that eliminate the margin or padding by setting it to 0

	- 1
	
		(by default) for classes that set the margin or padding to $spacer * .25

	- 2
	
		(by default) for classes that set the margin or padding to $spacer * .5

	- 3
	
		(by default) for classes that set the margin or padding to $spacer

	- 4
	
		(by default) for classes that set the margin or padding to $spacer * 1.5

	- 5
	
		(by default) for classes that set the margin or padding to $spacer * 3

	- auto
	
		for classes that set the margin to auto

To customize spacer and size, rewrite the value of the property in **$spacer and $spacers**.

```scss
$spacer: 0.5rem;
$spacers: (
	0: 0,
	1: $spacer * 1,
	2: $spacer * 2,
	3: $spacer * 3,
	4: $spacer * 4,
	5: $spacer * 5,
) !default;
```

**$spacer and $spacers** is locate in the _variables.scss file in the scss directory in the bootstrap directory.

```scss
// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

// scss-docs-start spacer-variables-maps
$spacer: 1rem !default;
$spacers: (
	0: 0,
	1: $spacer * .25,
	2: $spacer * .5,
	3: $spacer,
	4: $spacer * 1.5,
	5: $spacer * 3,
) !default;
```

## Buttons

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.  
<https://getbootstrap.com/docs/5.1/components/buttons/>  

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```

## Forms

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.  
<https://getbootstrap.com/docs/5.1/forms/overview/>  
Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

```html
<form>
	<div class="mb-3">
		<label for="exampleInputEmail1" class="form-label">Email address</label>
		<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
		<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
	</div>
	<div class="mb-3">
		<label for="exampleInputPassword1" class="form-label">Password</label>
		<input type="password" class="form-control" id="exampleInputPassword1">
		</div>
		<div class="mb-3 form-check">
		<input type="checkbox" class="form-check-input" id="exampleCheck1">
		<label class="form-check-label" for="exampleCheck1">Check me out</label>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
```

Also, in bootstrap version 5 and above, dropped form-specific layout classes for our grid system.  
Use our grid and utilities instead of .form-group, .form-row, or .form-inline.  
The following is a comparison of the differences.

- Bootstrap4.x

```html
<div class="form-group">
	<label for="Input-id">UserID</label>
	<input type="text" class="form-control" id="Input-id" placeholder="Write UserID">
</div>
<div class="form-group">
	<label for="Input-pass">パスワード</label>
	<input type="password" class="form-control" id="Input-pass" placeholder="Write Password">
</div>
```

- Bootstrap5.x

```html
<div class="mb-3">
	<label for="Input-id" class="form-label">UserID</label>
	<input type="text" class="form-control" id="Input-id" placeholder="Write UserID">
</div>
<div class="mb-3">
	<label for="Input-pass" class="form-label">パスワード</label>
	<input type="password" class="form-control" id="Input-pass" placeholder="Write Password">
</div>
```

## Select

Customize the native \<select>s with custom CSS that changes the element’s initial appearance.  
<https://getbootstrap.com/docs/5.1/forms/select/>  
Write **selected** in the option tag of the one you want to make the initial value of the screen.

```html
<select class="form-select" aria-label="Default select example">
	<option selected>Open this select menu</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
```

## Shadows

Add or remove shadows to elements with box-shadow utilities.  
<https://getbootstrap.com/docs/5.1/utilities/shadows/>  

```html
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
```

```scss
$box-shadow:                  0 .5rem 1rem rgba($black, .15);
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075);
$box-shadow-lg:               0 1rem 3rem rgba($black, .175);
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);
```

## Visually hidden

Use these helpers to visually hide elements but keep them accessible to assistive technologies.  
<https://getbootstrap.com/docs/5.1/helpers/visually-hidden/>  
Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with **.visually-hidden**.  
Use **.visually-hidden-focusable** to visually hide an element by default, but to display it when it’s focused (e.g. by a keyboard-only user).  
**.visually-hidden-focusable** can also be applied to a container–thanks to :focus-within, the container will be displayed when any child element of the container receives focus.  
In addition, the following changes were made when Series 4 was replaced by Series 5.

- “Screen reader” classes are now “visually hidden” classes.

	- Changed the Sass file from scss/helpers/_screenreaders.scss to scss/helpers/_visually-hidden.scss

	- Renamed .sr-only and .sr-only-focusable to .visually-hidden and .visually-hidden-focusable

	- Renamed sr-only() and sr-only-focusable() mixins to visually-hidden() and visually-hidden-focusable().

## Badges

Documentation and examples for badges, our small count and labeling component.  
<https://getbootstrap.com/docs/5.1/components/badge/>  
Use our background utility classes to quickly change the appearance of a badge.  
Please note that when using Bootstrap’s default .bg-light, you’ll likely need a text color utility like .text-dark for proper styling.

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>
```

## Vertical alignment

Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.  
<https://getbootstrap.com/docs/5.1/utilities/vertical-align/>  
Change the alignment of elements with the vertical-alignment utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.  
Choose from **.align-baseline**, **.align-top**, **.align-middle**, **.align-bottom**, **.align-text-bottom**, and **.align-text-top** as needed.  
To vertically center non-inline content (like \<div>s and more), use our flex box utilities.

## Unstyled

Remove the default list-style and left margin on list items (immediate children only).  
<https://getbootstrap.com/docs/5.1/content/typography/#unstyled>  
This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.

```html
<ul class="list-unstyled">
	<li>list1</li>
	<li>list2</li>
	<li>list3</li>
	<li>list4</li>
</ul>
```

## .display

This is used when you want to handle very large characters.

```css
.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}

@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}

@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}

@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}

@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}

@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}

@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}
```

## Checks and radios

Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.  
<https://getbootstrap.com/docs/5.1/forms/checks-radios/#inline>  
There are various classes on button shapes and how to arrange buttons.

```html
<div class="form-check">
	<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
	<label class="form-check-label" for="flexCheckDefault">
		Default checkbox
	</label>
</div>
<div class="form-check">
	<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
	<label class="form-check-label" for="flexCheckChecked">
		Checked checkbox
	</label>
</div>
```

Options (e.g. don't double check etc..) specify with the **name** attribute.

```html
<div class="form-check form-check-inline">
	<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
	<label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
	<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
	<label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
	<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
	<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
```