const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');
const paddleImg = new Image();
paddleImg.src = 'assets/bat.svg';
let paddleImgReady = false;
paddleImg.onload = () => { paddleImgReady = true; };
paddleImg.onerror = () => { paddleImgReady = false; };

let paddleY = 120, ballX = 200, ballY = 150, ballDX = 2, ballDY = 2, paddleDY = 0;
let cpuY = 120, cpuSpeed = 3;
let leftScore = 0, rightScore = 0;

function draw() {
  ctx.clearRect(0, 0, 400, 300);
  if (paddleImgReady) {
    ctx.drawImage(paddleImg, 10, paddleY, 10, 60);
  } else {
    ctx.fillStyle = "#00E15C";
    ctx.fillRect(10, paddleY, 10, 60);
  }
  // CPU paddle (right)
  if (paddleImgReady) {
    ctx.drawImage(paddleImg, 380, cpuY, 10, 60);
  } else {
    ctx.fillStyle = "#00E15C";
    ctx.fillRect(380, cpuY, 10, 60);
  }
  // Scoreboard
  ctx.fillStyle = "#72F9A1";
  ctx.font = "16px Arial";
  ctx.fillText(`${leftScore} : ${rightScore}`, 180, 20);

  ctx.beginPath();
  ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#00E15C";
  ctx.fill();
}

function update() {
  paddleY += paddleDY;
  paddleY = Math.max(0, Math.min(240, paddleY));
  ballX += ballDX;
  ballY += ballDY;
  if (ballY < 8 || ballY > 292) ballDY *= -1;
  if (ballX < 20 && ballY > paddleY && ballY < paddleY + 60) ballDX *= -1;

  // Basic AI: follow ball with a clamp
  const cpuCenter = cpuY + 30;
  if (cpuCenter < ballY - 5) cpuY = Math.min(240, cpuY + cpuSpeed);
  else if (cpuCenter > ballY + 5) cpuY = Math.max(0, cpuY - cpuSpeed);

  // Right paddle collision
  if (ballX > 370 && ballY > cpuY && ballY < cpuY + 60) {
    ballDX *= -1;
    // add a bit of "spin" based on hit position
    const offset = (ballY - (cpuY + 30)) / 30;
    ballDY = Math.max(-4, Math.min(4, ballDY + offset * 2));
    ballX = 370;
  }

  // Scoring
  if (ballX < 0) { rightScore++; resetBall(-1); }
  if (ballX > 400) { leftScore++; resetBall(1); }
}

function resetBall(dir = 1) {
  ballX = 200;
  ballY = 150;
  ballDX = 2 * dir;
  ballDY = (Math.random() > 0.5 ? 2 : -2);
  paddleY = 120;
  cpuY = 120;
}

document.addEventListener('keydown', e => {
  if (e.key === "ArrowUp") paddleDY = -4;
  if (e.key === "ArrowDown") paddleDY = 4;
});

document.addEventListener('keyup', e => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") paddleDY = 0;
});

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
