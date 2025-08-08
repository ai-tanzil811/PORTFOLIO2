const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');
let snake = [{x:200,y:150}], dir = 'RIGHT', food = {x:100,y:100}, gameOver = false;
let score = 0, speed = 80;
function draw() {
  ctx.clearRect(0,0,400,300);
  ctx.fillStyle="#00E15C";
  snake.forEach(s=>ctx.fillRect(s.x,s.y,10,10));
  ctx.fillStyle="#fff";
  ctx.fillRect(food.x,food.y,10,10);
  // HUD score
  ctx.fillStyle = "#72F9A1";
  ctx.font = "14px Arial";
  ctx.fillText(`Score: ${score}`, 10, 16);
}
function update() {
  if(gameOver) return;
  let head = {...snake[0]};
  if(dir=='LEFT')head.x-=10;
  if(dir=='RIGHT')head.x+=10;
  if(dir=='UP')head.y-=10;
  if(dir=='DOWN')head.y+=10;
  snake.unshift(head);
  if(head.x==food.x&&head.y==food.y){
    // place food not on snake
    do {
      food.x=10*Math.floor(Math.random()*40);
      food.y=10*Math.floor(Math.random()*30);
    } while (snake.some(s=>s.x===food.x && s.y===food.y));
    score += 1;
    // speed up slightly
    speed = Math.max(40, speed - 2);
  }else{
    snake.pop();
  }
  if(head.x<0||head.x>=400||head.y<0||head.y>=300||snake.slice(1).some(s=>s.x==head.x&&s.y==head.y))gameOver=true;
}
function loop(){update();draw();if(!gameOver)setTimeout(loop,speed);}
document.addEventListener('keydown',e=>{
  if(e.key=="ArrowLeft"&&dir!='RIGHT')dir='LEFT';
  if(e.key=="ArrowRight"&&dir!='LEFT')dir='RIGHT';
  if(e.key=="ArrowUp"&&dir!='DOWN')dir='UP';
  if(e.key=="ArrowDown"&&dir!='UP')dir='DOWN';
  if (e.key.toLowerCase() === 'r' && gameOver) {
    // restart
    snake = [{x:200,y:150}]; dir='RIGHT'; food={x:100,y:100}; gameOver=false; score=0; speed=80; loop();
  }
});
loop();
