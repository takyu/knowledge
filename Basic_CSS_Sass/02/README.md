## Specificity

Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.  
<https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity>
```
id(#) > class(.) > child element > parent element
```

There is also a way to write the parent and child elements together, in which case the priority is higher than "class".  

- Apply styles to descendant elements contained in the parent element
```css
#parent div {

}
```

- Apply styles to a child element contained in the parent element
```css
#parent > .child {

}
```