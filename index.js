function reset_animation() {
  var el = document.getElementById("typed-out");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; // reset animation
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
