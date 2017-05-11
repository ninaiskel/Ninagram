#Filtering
==========

CSS filter property is a powerful tool that provides access to effects. We’ll cover examples of all the predefined filters defined for CSS with some examples

Demo:

#Filters:
--------------------
+ grayscale
+ sepia
+ saturate
+ hue-rotate
+ invert
+ opacity
+ brightness
+ contrast
+ drop-shadow

Learn more about CSS filters:
https://developer.mozilla.org/en-US/docs/Web/CSS/filter?v=control

##Usage
You can use this examples in your own css file, or download the filtering.css file and add it to the head of your document this link:

```
<link href="path/ninagram.css" rel="stylesheet" type="text/css">
```

Then to use the filters, use the proper classes on your elements, and that's it!

```
<div class="grayscale">
    <img src="image.png"/>
</div>
```

## Example

```css
.blur img {
	filter: blur(4px) contrast(2);
}

.sepia img {
  filter: sepia(1); }
```
