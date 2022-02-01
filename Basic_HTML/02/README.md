## Block-level elements
A Block-level element occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents, thereby creating a "block".  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements>

## Inline elements

Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements>

## Inline elements v.s. Block-level elements

1. Inline elements for ***horizontal*** alignment, Block-level elements for ***vertical*** alignment.  

2. The block-level element can specify the height and width.  

3. There is a difference between inline elements and block-level elements in the way they specify layout. For example, if you want to put center an ***inline element***, use "text-align: center" for its parent element, and if you want to put center a ***block element***, use "margin: 0 auto" for its element.

## inline-block

It is side-by-side, but the height and width apply.  
You can use CSS to apply it to any element.
```CSS
div {
	display: inline-block;
}
span {
	display: inline-block;
}
```