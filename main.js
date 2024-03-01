document.getElementById("nav__icon").addEventListener("click", () => {
	myFunction();
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
