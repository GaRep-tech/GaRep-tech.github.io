$(document).ready(function () {
  $(window).scroll(function () {

function reset_animation() {
  var el = document.getElementById('typed-out');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
}
      });
});
