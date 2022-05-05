/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
  /* removing animation in small size screens */

  const mqList = window.matchMedia("(max-width: 600px)")
// If media query matches on load
if (mqList.matches) {
    document.querySelectorAll(".image-container-flex").removeAttribute("data-aos");
}
// If media query matches after resize
// mqList.addListener(function(mql) {
//     if (mql.matches) {
//         setDelay(400) // using Hugo's function
//     }
// })