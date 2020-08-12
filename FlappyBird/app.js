document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");
  //   const sky = document.querySelector(".sky");

  let birdLeft = 220,
    birdBottom = 100,
    gravity = 2;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  function jump() {
    birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }

  document.addEventListener("keyup", jump);

  let timerId = setInterval(startGame, 20);
  //   clearInterval(timerId);
});
