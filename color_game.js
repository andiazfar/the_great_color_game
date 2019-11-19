// Used to debug!
// alert("Connected!")

// Change colors to items when changing to using images!
var number_of_squares = 6;
var items = [];
var target;
var squares = document.querySelectorAll(".square");
var answer_display = document.getElementById("answer_display");
var message_display = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset")
var mode_buttons = document.querySelectorAll(".mode");
answer_display.textContent = target;

init();

function init() {

	set_up_mode_buttons();
	set_up_square_listener();
	reset();
}

function set_up_mode_buttons() {
	// Set up the Mode button Listeners	
	for (var i = 0; i < mode_buttons.length; i++) {
		mode_buttons[i].addEventListener("click", function() {
			mode_buttons[0].classList.remove("selected");
			mode_buttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? number_of_squares = 3 : number_of_squares = 6;
			reset();

			// This is the logic for squares to show
			// Pick new colors
			// Pick a new target/answer
			// Update the page
		} )
	}
}

function set_up_square_listener() {
	// Set up the Square Listeners!
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			// Grab the information of the clicked square
			// Important Message!!!!
			// Depending on how you set the color or item up top, you need to change
			// the .style.background!!
			// Normally, we want to use this one
			// console.log(this.style.background);

			// But for color, lets use this one
			var clicked_item = this.style.backgroundColor;

			//Let's compare the answer!
			if (clicked_item === target) {
				message_display.textContent = "Correct!"
				change_items(clicked_item);
				h1.style.backgroundColor =  clicked_item
				reset_button.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323"
				message_display.textContent = "Try Again" 
			}

		});
	}
}


function reset() {
	// Generate random items
	items = generate_random_item(number_of_squares);
	// Choose the target, answer
	target = pick_item();
	// Change the answer display
	answer_display.textContent = target;
	reset_button.textContent = "New Colors";
	message_display.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (items[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = items[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

reset_button.addEventListener("click", function() {
	reset();
})


function change_items (clicked_item) {
	// This will loop through all squares to match the right answer!
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = clicked_item;
		// squares[i].style.background = clicked_item;
	}
}

function pick_item() {
	var random = Math.floor(Math.random() * items.length);
	return items[random];
}

function generate_random_item (num) {
	// Make an array
	var arr = [];
	// Repeat num times
	for (var i = 0; i < num; i++) {
		// Get random and color and push into array
		arr.push(random_item())
	}
	// Return the array
	return arr;
}

function random_item() {
	// Pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	//Then, we put them into strings!
	return "rgb(" + r + ", " + g + ", " + b + ")";

}