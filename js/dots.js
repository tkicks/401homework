var coverTop = false,
	coverSide = false;
function SAMTab() {
	console.log("Dot Illusion tab active");

	var canvas = $('#illusion1Canvas')[0];		// get the canvas element
	var ctx = canvas.getContext("2d");			// set context of canvas
	var width = canvas.width;					// get canvas width
	var height = canvas.height;					// get canvas height
	var evens = true;							// draw the top left/bottom right

<<<<<<< HEAD
	// set interval to flash the circles on, call function to draw circles
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	setInterval(function() {
		evens = flashShapes(ctx, evens, width, height)
	}, 130);
}

function drawSamDots(ctx, x, y) {
<<<<<<< HEAD
// INPUT: context, x/y coords of circle
// draws the dots that should be showing
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	ctx.fillStyle = "#00f"
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
}

function flashShapes(ctx, evens, width, height) {
<<<<<<< HEAD
// INPUT: context, if the even number circles are flashing, width/height of canvas
// decide which dots should be showing
	ctx.clearRect(0, 0, width, height);
	if (coverTop)					// if a side should be covered up
		coverTopSAM();				// cover up
	if (coverSide)					// if a side should be covered up
		coverSideSAM();				// cover up
	var x, y;						// x, y coords of circles
	if (evens) {
		if (!coverTop) {			// if the top row can be seen
			x = 70;
			y = 30;
			drawSamDots(ctx, x, y);	// top left
		}
		if (!coverSide) {			// if the top row can be seen
			x = width - 70;
			y = height - 30;
			drawSamDots(ctx, x, y);	// bottom right
		}
		return evens = false;		// return that the next circles should be odd
	}
	else {
		if (!coverTop && !coverSide) {	// if all dots can be seen
			x = width - 70;
			y = 30;
			drawSamDots(ctx, x, y);	// top right
		}
		x = 70;
		y = height - 30;
		drawSamDots(ctx, x, y);	// bottom left
		return evens = true;	// return that next circles should be evens
=======
	ctx.clearRect(0, 0, width, height);
	if (coverTop)
		coverTopSAM();
	if (coverSide)
		coverSideSAM();
	var x, y;
	if (evens) {
		if (!coverTop) {
			x = 60;
			y = 30;
			drawSamDots(ctx, x, y);	// top left
		}
		if (!coverSide) {
			x = width - 60;
			y = height - 30;
			drawSamDots(ctx, x, y);	// bottom right[2]
		}
		return evens = false;
	}
	else {
		if (!coverTop && !coverSide) {
			x = width - 60;
			y = 30;
			drawSamDots(ctx, x, y);	// top right
		}
		x = 60;
		y = height - 30;
		drawSamDots(ctx, x, y);	// bottom left
		return evens = true;
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	}
}

function toggleTopSAM() {
<<<<<<< HEAD
// toggle whether or not to cover the top based on user input (button)
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	if (coverTop)
		coverTop = false;
	else
		coverTop = true;
}

function toggleSideSAM() {
<<<<<<< HEAD
// toggle whether or not to cover the side based on user input (button)
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	if (coverSide)
		coverSide = false;
	else
		coverSide = true;
}

function coverTopSAM() {
<<<<<<< HEAD
// draw a rectangle over the top of the canvas
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	var canvas = $('#illusion1Canvas')[0];
	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;

	ctx.fillStyle = "#000"
	ctx.beginPath();
	ctx.rect(0, 0, 300, 60);
	ctx.closePath();
	ctx.fill();
}

function coverSideSAM() {
<<<<<<< HEAD
// draw a rectangle over the side of the canvas
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	var canvas = $('#illusion1Canvas')[0];
	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;

	ctx.fillStyle = "#000"
	ctx.beginPath();
	ctx.rect(width-100, 0, 300, 300);
	ctx.closePath();
	ctx.fill();
}

function resetSAM() {
<<<<<<< HEAD
// reset the illusion by removing any covers
=======
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	coverTop = coverSide = false;
}