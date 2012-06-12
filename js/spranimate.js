/**
 * Takes a boring spritesheet and turns it into glorioud animated content!
 *
 * @param {HTMLImageObject} htmlImageObject The spritesheet to animate
 * @param {object} userOptions     Options for the sprite
 *                                 + height: Height of the sprite
 *                                 + width: Width of the sprite
 *                                 + framerate: The framerate of the animation
 */
function Spranimate(htmlImageObject, userOptions) {
	var options = {
		height: 32,
		width: 32,
		framerate: 60
	};

	var spranimate = this;

	var sprite = '';
	var columns = 0;
	var rows = 0;

	var currentCol = 0;
	var currentRow = 0;

	var interval;

	/**
	 * Merges the given options with the defaults.
	 * This is a very simple merge and overwrites any variables set in the default.
	 */
	for(var o in userOptions) {
		options[o] = userOptions[o];
	}

	var spritesheet = htmlImageObject;

	/**
	 * Calculate the number of frames in the spritesheet.
	 */
	function setFrames() {
		columns = Math.ceil(spritesheet.width / options.width);
		rows = Math.ceil(spritesheet.height / options.height);
	}

	/**
	 * Replaces the spritesheet image with the sprite div that we animate
	 */
	function createSprite() {
		sprite = document.createElement("DIV");
		sprite.style.width = options.width + "px";
		sprite.style.height = options.height + "px";
		sprite.style.backgroundImage = 'url("'+spritesheet.src+'")';
		sprite.style.backgroundPosition = "0 0";
		sprite.style.overflow = "hidden";

		spritesheet.parentNode.replaceChild(sprite, spritesheet);
	}

	/**
	 * Play the animation. Traverses the spritesheet by changing the background position of our div
	 */
	function play() {
		if(currentCol == columns) {
			currentCol = 0;
			currentRow++;
		}

		if(currentRow == rows) {
			currentRow = 0;
		}

		var left = currentCol * options.width + "px";
		var top = currentRow * options.height + "px";

		sprite.style.backgroundPosition = "-"+left + " -"+top;

		currentCol++;
	}

	/**
	 * Basic setup, call our preparing functions and start the animation
	 */
	function setUp() {
		setFrames();
		createSprite();
		interval = setInterval(play, 1000 / options.framerate);
	}

	if(spritesheet.complete) {
		setUp();
	} else {
		spritesheet.onload = setUp;
	}
}