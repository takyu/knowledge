## form

The \<form> HTML element is one that contains input fields and components such as buttons to submit the contents written in the input fields.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form>  
Using the form tag, the **action** attribute specifies the path or URL to which the form should be submitted.  

## input

The \<input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>
A wide variety of types of input data and control widgets are available, depending on the device and user agent.  
Emmet's completion feature allows you to see the various "type" when you type **input:**.

```php
<form action="">
	<input type="text" name='username'>

	<!-- only numeric character-->
	<!--<input type="number">-->

	<!-- password -->
	<input type="password" name="pwd">

	<!-- botton which is simple with label  -->
	<input type="submit" value="Push!">

	<!-- button which is complex with label (CSS) -->
	<!--<button type="submit">PUSH!!</button>-->

</form>
```