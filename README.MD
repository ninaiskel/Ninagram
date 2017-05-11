#Ninagram
==========

CSS filter property is a powerful tool that allows you adding filters to the images. We’ll cover examples of all the predefined filters defined for CSS with some examples
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
You can use this examples in your own css file, or download the ninagram.css file and add it to the <head> of your document this link:

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
	filter: blur(4px);
}

.sepia img {
  filter: sepia(1); }
```

You can combine filters too
```css
.blur img {
	filter: blur(1px)
          contrast(1);
}
```

### Available Classes
.grayscale
.sepia
.saturate
.hue-rotate
.invert
.opacity
.brightness
.contrast
.drop-shadow
.contrast-saturate-sepia
.drop-shadow-saturate-contrast
.grayscale-invert-contrast
