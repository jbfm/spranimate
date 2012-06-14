#spranimate
-----------
###Ever wanted to take an ordinary, boring spritesheet and turn it into a glorious, animated wonder?
Then spranimate is for you!
This is not something to be used in games, it's simply a script to make nice presentations for your spritesheets.

It's very basic now, I plan on expanding it if I can.

#Usage
-----------
Spranimate takes one parameter, `options`, an object of options. All three options shown in the example files.
Spranimate extends `HTMLImageElement`.

Spranimate returns a `HTMLDivElement` in case you want to manipulate the animation after initializing it.

```javascript
HTMLImageElement.spranimate({
	height: 16,
	width: 16,
	framerate: 10
});
```

#FAQ
------------

###Can I use spritesheets with several rows?
Yes

###Can I pause the animation?
No

###Can I make coffee with the script
No, what's wrong with you?
