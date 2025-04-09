// Controls for the left fighter
const cubeLeft = document.getElementById('cube-left');
let positionLeft = 100;
const moveSpeed = 20; // Increased speed

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  if (key === 'q') {
    positionLeft = Math.max(0, positionLeft - moveSpeed);
  } else if (key === 'd') {
    positionLeft = Math.min(window.innerWidth - 70, positionLeft + moveSpeed);
  }

  cubeLeft.style.left = positionLeft + 'px';
});

