/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const myFunction = () => {
  document.getElementById("navDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.nav__icon')) {
    var dropdowns = document.getElementsByClassName("nav__dropdown-container");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
