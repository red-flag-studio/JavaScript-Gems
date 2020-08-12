document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");
  //   const sky = document.querySelector(".sky");

  let birdLeft = 220,
    birdBottom = 100,
    gravity = 2,
    isGameOver = false;

  function startGame() {
    if (birdBottom > 0) birdBottom -= gravity;
    else gameOver();
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  let gameTimerId = setInterval(startGame, 20);

  function control(e) {
    switch (e.keyCode) {
      case 32:
        jump();
    }
  }

  function jump() {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }

  document.addEventListener("keyup", control);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    if (!isGameOver) obstacle.classList.add("obstacle");
    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
    gameDisplay.appendChild(obstacle);

    function moveObstacleLeft() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + "px";
      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
      }
      if (
        (obstacleLeft > 200 &&
          obstacleLeft < 280 &&
          birdLeft === 220 &&
          birdBottom  < 150 + obstacleBottom) ||
        birdBottom === 0
      ) {
        clearInterval(timerId);
        gameOver();
      }
    }
    let timerId = setInterval(moveObstacleLeft, 20);
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener("keyup", control);
  }
});
