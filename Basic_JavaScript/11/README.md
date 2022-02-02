## DOM

DOM stands for Document Object Model and it is the interface to refer and update HTML from JavaScript.  
A representation of HTML in object form.  
The HTML state is kept in the DOM tree and stored in the "Document" object.  
```html
<html>
	<head>
		<title>DOM</title>
	</head>
	<body>
		<h1>Hello</h1>
		<div>body</div>
	</body>
</html>
```

In the above case, the DOM tree looks like the following.  
```
                    html  
               ↙︎            ↘︎  
          body                head  
      ↙︎          ↘︎                ↘︎  
h1                  div            title  
```

## querySelector

querySelector is a method of Document.  
<https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector>  
It returns the first Element within the document that matches the specified selector, or group of selectors.  
If no matches are found, null is returned.
```JS
/**
 * @param selectors A DOMString containing one or more selectors to match
 */
element = document.querySelector(selectors);
```

## createElement

createElement is a method of Document.  
<https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>  
It creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
```JS
/**
 * @param tagName A string that specifies the type of element to be created
 * @param options An optional ElementCreationOptions object,
 	containing a single property named is,
	whose value is the tag name of a custom element
	previously defined via customElements.define().
 */
let element = document.createElement(tagName[, options]);
```

## innerHTML

innerHTML is a property of element.  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML>  
It gets or sets the HTML or XML markup contained within the element.
```JS
// get
const element = element.innerHTML;

// set
element.innerHTML = htmlString;
```

## insertAdjacentHTML

insertAdjacentHTML is a method of element.  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML>  
It parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
```JS
/**
 * @param position A DOMString representing the position relative to the element; must be one of the following strings:
 * ・ 'beforebegin' : Before the element itself
 * ・ 'afterbigin' : Just inside the element, before its first child
 * ・ 'beforeend' : Just inside the element, after its last child
 * ・ 'afterend' :  After the element itself
 * @param text The string to be parsed as HTML or XML and inserted into the tree
 */
element.insertAdjacentHTML(position, text);
```

As follows, visualization of position names.
```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

## setAttribute

setAttribute is a method of element.  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute>  
It sets the value of an attribute on the specified element.  
If the attribute already exists, the value is updated, otherwise a new attribute is added with the specified name and value.  
If you get the current value of an attribute, use [getAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute).  
Also, If you remove an attribute, call [removeAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)
```JS
/**
 * @param name A DOMString specifying the name of the attribute whose value is to be set
 * @param value A DOMString containing the value to assign to the attribute
 */
element.setAttribute(name, value);
```

## appendChild

appendChild is a method of Node.  
<https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild>  
It adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position.  
The returned value is the appended child, except when aChild is a DocumentFragment, in which case the empty DocumentFragment is returned.
```JS
/**
 * @param aChild The node to append to the given parent node (commonly an element)
 */
element.appendChild(aChild);
```

## DocumentFragment

DocumentFragment is an interface that represents a minimal document object that has no parent.  
<https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment>  
Put all the nodes that you want to add into the container created by DocumentFragment in advance.  
Finally, the entire DocumentFragment container is added to the actual HTML at once.  
By doing this, the rendering process on the browser side can be done only once, which improves performance.
```JS
fragment = new DocumentFragment()
```

## DOM vs. Element vs. Node

- DOM

	- An interface between HTML documents and JavaScript

	- DOM tree is composed of Nodes

- Element

	- An object used when performing operations with the elements of an HTML document in mind

- Node

	- An object used for DOM tree operations in mind

### Why create manipulation object of node?

To make it easier to follow the code when maintaining large applications.
There are two reasons.  

1. To make it easier to follow the code when maintaining large applications

2. To make it easier to modify when some specification changes (JavaScript in this case).
