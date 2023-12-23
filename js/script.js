// Old code for copying text
function copyText(event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the value from the first field
	var inputText = document.getElementById('inputField').value;

	// Remove tabs and forbidden characters
	var correctedText = inputText.replace(/\t/g, '').replace(/[\\/:\*\?"<>\|]/g, '');

	// Set the corrected value in the second field
	document.getElementById('outputField').value = correctedText;
}

// Scroll to the top of the page
function scrollToTop() {
	window.scrollBy(0, 0);
	window.scrollBy({
		top: 0,
		behavior: 'smooth'
	});
}

// code for the navigation menu
function setupNavMenu() {
	const navToggle = document.querySelector('.header_nav_toggle');
	const navMenu = document.querySelector('.header_nav');


	navToggle.addEventListener('click', function () {
		navMenu.classList.toggle('active');
	});

	// Close the menu when clicking outside of it
	document.addEventListener('click', function (event) {
		if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
			navMenu.classList.remove('active');
		}
	});

	// Prevent clicks inside the menu from closing it
	navMenu.addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

// Execute the functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
	setupNavMenu();

	// Add any other initialization code here if needed
});

// Execute the scrollToTop function when the 'port' button is clicked
const btnPort = document.getElementById('port');
btnPort.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToTop();
});
