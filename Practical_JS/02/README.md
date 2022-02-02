## Client-side form validation

Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format.  
<https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation>  
This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls.  
The browser provides for client-side validation on (attempted) form submission.  
On form submission, if there is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

- Validity errors depend on the \<input> attributes

	| Attribute | Description |
	| :---: | :---: |
	| max |	Occurs when the value is greater than the maximum value<br>as defined by the max attribute |
	| min | Occurs when the value is less than the minimum value<br>as defined by the min attribute |
	| **maxlength**	| Occurs when the number of characters is greater than the number<br>allowed by the maxlength property |
	| **minlength** | Occurs when the number of characters is less than the number<br>required by the minlength property |
	| **pattern** | Occurs when a pattern attribute is included with a valid regular expression<br>and the value does not match it. |
	| **required** | Occurs when the required attribute is present<br>but the value is null or radio or checkbox is not checked. |
	| step | The value doesn't match the step increment.<br>Increment default is 1, so only integers are valid on type="number" is step is not included.<br>step="any" will never throw this error. |
	| type | Occurs when the value is not of the correct type.<br>for example a email does not contain an @ or a url doesn't contain a protocol. |

	There are many other attributes (see [this site](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)).  
	The following are some of the most commonly used attributes along with form validation.

	| Attribute | Description |
	| :---: | :---: |
	| autocomplete | Hint for form autofill feature<br>set "off", the completion function is disabled. |
	| autofocus | Automatically focus the form control when the page is loaded. |
	| tabindex | An integer attribute indicating<br>if the element can take input focus (is focusable). |
	| disabled | Whether the form control is disabled. |

## novalidate

This Boolean attribute indicates that the form shouldn't be validated when submitted.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate>  
Add this attribute when you want to apply form validation in JS.

## Event

The Event interface represents an event which takes place in the DOM.  
<https://developer.mozilla.org/en-US/docs/Web/API/Event>

## Event.currentTarget

The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM.  
<https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget>  
It always refers to the element to which the event handler has been attached, as opposed to **Event.target**, which identifies the element on which the event occurred and which may be its descendant.  
**Event.currentTarget.value**, you can get the value that has been passed to that DOM object.

## ValidityState

The ValidityState interface represents the validity states that an element can be in, with respect to constraint validation.  
<https://developer.mozilla.org/en-US/docs/Web/API/ValidityState>  
Together, they help explain why an element's value fails to validate, if it's not valid.  
**Event.currentTarget.validity**, you can get the validitystate that has been passed to that DOM object.  

- Properties

	For each of these Boolean properties, a value of true indicates that the specified reason validation may have failed is true, with the exception of the **valid property**, which is true if the element's value obeys all constraints.

	- **valid**

		A boolean value that is true if the element meets all its validation constraints, and is therefore considered to be valid, or false if it fails any constraint.

	- **valueMissing**

		A boolean value that is true if the element has a required attribute, but no value, or false otherwise.

	- **tooShort**

		A boolean value that is true if the value fails to meet the specified minlength for HTMLInputElement or HTMLTextAreaElement objects, or false if its length is greater than or equal to the minimum length.

	- **tooLong**

		A boolean value that is true if the value exceeds the specified maxlength for HTMLInputElement or HTMLTextAreaElement objects, or false if its length is less than or equal to the maximum length.

	- **patternMismatch**

		A boolean value that is true if the value does not match the specified pattern, and false if it does match.

	- badInput

		A boolean value that is true if the user has provided input that the browser is unable to convert.

	- customError
	
		A boolean value indicating whether the element's custom validity message has been set to a non-empty string by calling the element's setCustomValidity() method.

	- rangeOverflow

		A boolean value that is true if the value is greater than the maximum specified by the max attribute, or false if it is less than or equal to the maximum.

	- rangeUnderflow

		A boolean value that is true if the value is less than the minimum specified by the min attribute, or false if it is greater than or equal to the minimum.

	- stepMismatch

		A boolean value that is true if the value does not fit the rules determined by the step attribute (that is, it's not evenly divisible by the step value), or false if it does fit the step rule.

	- typeMismatch

		A boolean value that is true if the value is not in the required syntax (when type is email or url), or false if the syntax is correct. 

## HTMLSelectElement.checkValidity()

It is a method checks whether the element has any constraints and whether it satisfies them.  
If the element fails its constraints, the browser fires a cancelable invalid event at the element, and then returns **false**.  
<https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity>

```js
/**
 * @return boolean
 */
const result = selectElt.checkValidity();
```

## Validation (Bootstrap)

Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.  
<https://getbootstrap.com/docs/5.1/forms/validation/>  

- HTML form validation is applied via CSS’s two pseudo-classes, :invalid and :valid. It applies to \<input>, \<select>, and \<textarea> elements.

- **.is-invalid** and **.is-valid** classes may be used the pseudo-classes for server-side validation.

## Element.classList

This can then be used to manipulate the class list.  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/classList>  
It can be used to return a list of class attributes associated with an element, and the following methods can be used.

- add

	add a class to the element's class list.

- remove

	remove a class from the element's class list.

- toggle

	Toggle a specific class in the element's class list.

- contains

	Check if the element's class list contains a specific class or not.

## Element.nextElementSibling

The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling>  

```js
// Getter
element = el.nextElementSibling;

// No setter; read-only property
```

## Chart.js

Chart.js is a graph drawing library that uses Canvas.  
Simple yet flexible JavaScript charting for designers & developers.  
<https://www.chartjs.org/>  
All that's required is the script included in your page along with a single \<canvas> node to render the chart.  
Documentation of Chart.js is [here](https://www.chartjs.org/docs/latest/getting-started/usage.html).

- Creating a Chart

	To create a chart, we need to instantiate the Chart class.  
	To do this, we need to pass in the node, jQuery instance, or 2d context of the canvas of where we want to draw the chart.

	- html

		```html
		<canvas id="myChart" width="400" height="400"></canvas>
		```

	- js

		```js
		// Any of the following formats may be used
		const ctx = document.getElementById('myChart');
		const ctx = document.getElementById('myChart').getContext('2d');
		const ctx = $('#myChart');
		const ctx = 'myChart';
		```

	The following example instantiates a bar chart showing the number of votes for different colors and the y-axis starting at 0.

	- html

		```html
		<canvas id="myChart" width="400" height="400"></canvas>
		```

	- js

		```js
		const ctx = document.querySelector('#myChart');
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
		```

## HTMLCanvasElement.getContext()

The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode.  
<https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext>

```js
var ctx = canvas.getContext(contextType, contextAttributes);
```

- contextType

	It is a DOMString containing the context identifier defining the drawing context associated to the canvas.

	- '2d'
	
		leading to the creation of a [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) object representing a two-dimensional rendering context.

	- 'webgl' (or 'experimental-webgl')
	
		which will create a [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext) object representing a three-dimensional rendering context.

	- 'webgl2'
	
		which will create a [WebGL2RenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext) object representing a three-dimensional rendering context.

	- 'bitmaprenderer'
	
		which will create an [ImageBitmapRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext) which only provides functionality to replace the content of the canvas with a given ImageBitmap.

- contextAttributes (for '2d')

	You can use several context attributes when creating your rendering context.

	- alpha
	
		Boolean that indicates if the canvas contains an alpha channel.  
		If set to false, the browser now knows that the backdrop is always opaque, which can speed up drawing of transparent content and images.

	- desynchronized
	
		Boolean that hints the user agent to reduce the latency by desynchronizing the canvas paint cycle from the event loop.

## HTMLElement.dataset

The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements.  
<https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset>  
Be careful, the dataset property itself can be read, but not directly written.  
An HTML **data-*** attribute and its corresponding DOM dataset.property modify their shared name according to where they are read or written.

- In HTML

	The attribute name begins with data-.  
	It can contain only letters, numbers, dashes (-), periods (.), colons (:), and underscores (_). Any ASCII capital letters (A to Z) are **converted to lowercase**.

- In JavaScript

	The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property's "camelCased" name.
