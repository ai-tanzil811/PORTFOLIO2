const canvas = document.getElementById('breakout');
const ctx = canvas.getContext('2d');
const brickImg = new Image();
brickImg.src = 'assets/bat.svg';
let brickReady = false;
brickImg.onload = () => { brickReady = true; };
brickImg.onerror = () => { brickReady = false; };

let paddleX = 170, ballX = 200, ballY = 250, ballDX = 2, ballDY = -2, bricks = [];
let lives = 3, score = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 8; j++) {
    bricks.push({ x: 50 * j + 10, y: 20 * i + 10, hit: false });
  }
}

function draw() {
  ctx.clearRect(0, 0, 400, 300);
  ctx.fillStyle = "#00E15C";
  ctx.fillRect(paddleX, 280, 60, 10);

  ctx.beginPath();
  ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
  ctx.fill();

  bricks.forEach(b => {
    if (!b.hit) {
      if (brickReady) {
        ctx.drawImage(brickImg, b.x, b.y, 40, 10);
      } else {
        ctx.fillStyle = "#f6ad55";
        ctx.fillRect(b.x, b.y, 40, 10);
      }
    }
  });

  // HUD
  ctx.fillStyle = "#72F9A1";
  ctx.font = "14px Arial";
  ctx.fillText(`Score: ${score}`, 10, 16);
  ctx.fillText(`Lives: ${lives}`, 330, 16);
}

function update() {
  paddleX = Math.max(0, Math.min(340, paddleX));
  ballX += ballDX;
  ballY += ballDY;
  if (ballX < 8 || ballX > 392) ballDX *= -1;
  if (ballY < 8) ballDY *= -1;
  if (ballY > 280 && ballX > paddleX && ballX < paddleX + 60) ballDY *= -1;
  if (ballY > 300) {
    lives--;
    if (lives <= 0) {
      // reset all
      score = 0; lives = 3;
      bricks = bricks.concat([]); // keep remaining logic simple
      rebuildBricks();
    }
    resetBall();
  }
  bricks.forEach(b => {
    if (!b.hit && ballX > b.x && ballX < b.x + 40 && ballY > b.y && ballY < b.y + 10) {
      b.hit = true;
      ballDY *= -1;
      score += 10;
    }
  });
  bricks = bricks.filter(b => !b.hit);
  if (bricks.length === 0) {
    // win round
    rebuildBricks();
    resetBall();
  }
}

function resetBall() {
  ballX = 200; ballY = 250; ballDX = 2; ballDY = -2; paddleX = 170;
}

function rebuildBricks() {
  bricks = [];
  for (let i = 0; i < 5; i++) for (let j = 0; j < 8; j++) {
    bricks.push({ x: 50 * j + 10, y: 20 * i + 10, hit: false });
  }
}

document.addEventListener('keydown', e => {
  if (e.key === "ArrowLeft") paddleX -= 20;
  if (e.key === "ArrowRight") paddleX += 20;
});

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
