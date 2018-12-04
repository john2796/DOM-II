// Your code goes here


// Scroll event 
const mainNav = document.querySelector('.main-navigation');
const mainNavAtag = document.querySelectorAll('nav a');
console.log(mainNavAtag)
let last_known_scroll_position = 0;
let ticking = false;
function doSomething(scroll_pos) {
  // if(scroll_pos < 100)
  if (scroll_pos > 241.11111450195312) {
    mainNavAtag.forEach((aTag) => {
      aTag.style.color = "white";
    })
    mainNav.style.background = "#17A2B8"
    mainNav.style.color = "white"
  } else {
    mainNavAtag.forEach((aTag) => {
      aTag.style.color = "#212529";
    })
    mainNav.style.background = "#FFFFFF";
    mainNav.style.color = "#212529";

  }
}
window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});