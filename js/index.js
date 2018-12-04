// Your code goes here


// Scroll event 
const mainNav = document.querySelector('.main-navigation');
let mainNavAtag = document.querySelectorAll('nav a');

const images = document.querySelectorAll('img');
TweenMax.from(images, 2, {
  x: 100,
  opacity: 0
})


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


// Drag / drop 
function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dropEffect = "move";
}

function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data));
}

//load
window.addEventListener("load", function (event) {
  alert("All resources finished loading!");
});

let btn = document.querySelectorAll('.btn');
btn.forEach((button) => {
  button.addEventListener('click', function () {
    button.style.background = getRandomColor();
    console.log('color changed!!!')
  })
})


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// prevent default
mainNavAtag.forEach((aTag) => {
  aTag.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(`It's working`)
  })
})
// stopPropagation

btn[0].addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('Stop Propagation from console logging')
})

const bus = document.querySelector('.bus');
TweenMax.to(bus, 1, { x: 1100, })
TweenMax.to(bus, 1, { y: 800, delay: 1 })

// TweenMax.to(bus, 1, { y: 200, delay: 1 })
