// Code for copying text
function copyText(event) {
	// Prevent the default form submission behavior
	event.preventDefault();
	var inputField = document.getElementById('inputField');
	var outputField = document.getElementById('outputField');

	var inputText = inputField.value;

	// Regular expression for allowed characters in Windows filenames and folders
	var allowedCharsRegex = /[a-zA-Z0-9_\-().,;!@#$%^&\u4e00-\u9fa5\u0900-\u097F\u0600-\u06FF\u00C0-\u00FF\u0400-\u04FF\u200C\u200D。、，；！@＃＄％＾＆　\s]+/g;

	// Check for null before calling join('')
	var cleanedTextArray = inputText.match(allowedCharsRegex);
	var cleanedText = cleanedTextArray ? cleanedTextArray.join('') : '';

	outputField.value = cleanedText;

	// Count the number of removed characters
	var removedCharsCount = inputText.length - cleanedText.length;
	document.getElementById('removedCharsCount').textContent = removedCharsCount;
}

function copyToClipboard() {
	var outputField = document.getElementById('outputField');
	outputField.select();

	// Use navigator.clipboard.writeText for modern browsers
	navigator.clipboard.writeText(outputField.value)
		.then(() => {
			alert('Copied! Скопійовано!');
		})
		.catch((error) => {
			console.error('Error copying to clipboard:', error);
		});
}




// Scroll to the top of the page
function scrollToTop() {
	window.scrollBy(0, 0);
	window.scrollBy({
		top: 0,
		behavior: 'smooth'
	});
}

// Сode for the navigation menu
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
});

// Execute the scrollToTop function when the 'port' button is clicked
const btnPort = document.getElementById('port');
btnPort.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToTop();
});