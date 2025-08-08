const board = document.getElementById('ttt-board');
let cells = Array(9).fill(null), turn = 'X', gameOver = false;
function render() {
  board.innerHTML = '';
  cells.forEach((v,i)=>{
    const cell = document.createElement('div');
    cell.className = 'ttt-cell';
    cell.textContent = v||'';
    cell.onclick = ()=>move(i);
    board.appendChild(cell);
  });
}
function move(i){
  if(gameOver||cells[i])return;
  cells[i]=turn;
  if(checkWin(turn)){gameOver=true;setTimeout(()=>alert(turn+' wins!'),100);}
  else if(cells.every(c=>c)){gameOver=true;setTimeout(()=>alert('Draw!'),100);}
  turn=turn=='X'?'O':'X';
  render();
  if (!gameOver && turn === 'O') aiMove();
}
function checkWin(p){
  const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return w.some(a=>a.every(i=>cells[i]==p));
}
function aiMove() {
  if (gameOver) return;
  const best = minimax(cells, 'O').index;
  if (best !== undefined) {
    cells[best] = 'O';
    if (checkWin('O')) { gameOver = true; setTimeout(()=>alert('O wins!'),100); }
    else if (cells.every(c=>c)) { gameOver = true; setTimeout(()=>alert('Draw!'),100); }
    turn = 'X';
    render();
  }
}

function minimax(state, player) {
  // find empty spots
  const avail = state.map((v,i)=>v?null:i).filter(v=>v!==null);
  if (wins(state,'X')) return { score: -10 };
  if (wins(state,'O')) return { score: 10 };
  if (avail.length === 0) return { score: 0 };

  const moves = [];
  for (const i of avail) {
    const move = { index: i };
    state[i] = player;
    const res = minimax(state, player === 'O' ? 'X' : 'O');
    move.score = res.score;
    state[i] = null;
    moves.push(move);
  }
  let bestMove;
  if (player === 'O') {
    let bestScore = -Infinity;
    moves.forEach((m, idx) => { if (m.score > bestScore) { bestScore = m.score; bestMove = idx; }});
  } else {
    let bestScore = Infinity;
    moves.forEach((m, idx) => { if (m.score < bestScore) { bestScore = m.score; bestMove = idx; }});
  }
  return moves[bestMove];
}
function wins(s, p){
  const w = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return w.some(a=>a.every(i=>s[i]===p));
}
render();
