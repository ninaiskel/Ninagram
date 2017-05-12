#Ninagram
==========
CSS filter property is an amazing tool that allows you adding filters to the images. Ninagram try to give you the posibility to use this powerfull CSS feature.

You can see it on action in this [Demo](https://ninaiskel.github.io/Ninagram/)

Learn more about CSS filters:
https://developer.mozilla.org/en-US/docs/Web/CSS/filter?v=control

#Usage
==========
Copy the ninagram's CSS file, or download [file](https://github.com/ninaiskel/Ninagram/blob/master/app/css/ninagram.css)  and add it to the `<head>` tag of your document.

You can use the filters, use the proper classes on your elements, and that's it!

HTML
```
<div class="grayscale">
    <img src="image.png"/>
</div>
```

CSS

```css
.grayscale img {
    filter: grayscale(1);
}

.sepia img {
    filter: sepia(1);
    filter: grayscale(1);
}

.sepia img {
    filter: sepia(1);
}
```

You can combine multiple filters on the same property
```css
.blur img {
    filter: blur(1px) contrast(1);
}
```

# Available Classes
=======

```
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
```
