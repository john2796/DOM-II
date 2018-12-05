// const block = document.querySelectorAll(".block");

// let lastOrder = 0;
// let xIndex = {
//   "block--red": 0,
//   "block--blue": 0,
//   "block--green": 0,
//   "block--pink": 0,
//   "block--gray": 0
// }
// let interval;

// for (let i = 0; i <= block.length; i++) {
//   block[i].addEventListener('click', function () {
//     lastOrder -= 1;
//     block[i].style.order = `${lastOrder}`;
//   })
//   block[i].addEventListener('mousedown', function () {
//     interval = window.setInterval(function () {
//       //limit on the distance it can travel
//       if (xIndex[block[i].classList[1]] > 1000) {
//         console.log('past 1000')
//         xIndex[block[i].classList[1]] = 1000;
//       }
//       TweenMax.to(`.${block[i].classList[1]}`, 0.5, {
//         x: xIndex[block[i].classList[1]]++,
//       })
//     }, 10)
//     interval;
//     console.log("holding it down");
//   })
//   window.addEventListener('mouseup', function () {
//     window.clearInterval(interval);
//     //  When the mouse button is released, it should travel back to its original position.
//     TweenMax.to(`.${block[i].classList[1]}`, 0.5, {
//       x: 0,
//     })
//     console.log("released");
//   })
// }



const blocks = document.querySelectorAll('.block');
let increment = 0;
let interval;
Array.from(blocks).map((block) => {
  block.addEventListener('mousedown', function (e) {
    interval = window.setInterval(function () {
      TweenMax.to(block, 0.5, {
        x: increment += 1,
      })
      console.log(increment += 1);
    }, 10)
  })
  interval;
  window.addEventListener('mouseup', function (e) {
    window.clearInterval(interval);
    // blocksDiv.prepend(e.target)
    TweenMax.to(block, 0.5, {
      x: increment = 0,
    })
    console.log('mouseup');
  });
});