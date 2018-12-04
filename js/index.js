// Your code goes here


// Scroll event 
const mainNav = document.querySelector('.main-navigation');
const mainNavAtag = document.querySelectorAll('nav a');
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


// Resize 
window.addEventListener('resize', update);
let x = window.document.querySelector('#demo');
update();

function update() {
  x.innerHTML = `Browser inner window width: ${window.innerWidth}
                 , height: ${window.innerHeight}.`
}


// Mouse over 
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function (event) {
  console.log(event);
  logoHeading.textContent = 'Wild Bus !';
})



// Keydown 
const quotes = [["Imitation is suicide.", "-Ralph Waldo Emerson"], ["Flatter yourself critically.", "-Willis Goth Regier"], ["Don’t look for society to give you permission to be yourself.", "-Steve Maraboli"], ["If things go wrong, don’t go with them.", "-Roger Babson"], ["Wanting to be someone else is a waste of who you are.", "-Kurt Cobain"], ["Do what you can, with what you have, where you are.", "-Theodore Roosevelt"], ["If you cannot be a poet, be the poem.", "-David Carradine"], ["Be there for others, but never leave yourself behind.", "-Dodinsky"]];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

document.addEventListener('keydown', (event) => {
  console.log(event)
  const keyName = newQuote();
  alert('keydown event\n\n' + 'key: ' + keyName);

});

