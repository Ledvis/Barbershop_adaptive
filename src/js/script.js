var nav = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".popup");
var closePopup = popup.querySelector(".btn-green");
var form = document.querySelector(".form__blank");
var email = document.getElementById("email");

nav.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function(event) {
	event.preventDefault();
	if (nav.classList.contains("main-nav--closed")) {
		nav.classList.remove("main-nav--closed");
		nav.classList.add("main-nav--opened");
	} else {
		nav.classList.add("main-nav--closed");
		nav.classList.remove("main-nav--opened");
	}
});

form.addEventListener("submit", function(event) {
	if (!email.validity.valid) {
		popup.classList.add("popup--show");
		event.preventDefault();
	}
}, false);

closePopup.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup--show");
})

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup--show")) {
			popup.classList.remove("popup--show");
		}
	}
});