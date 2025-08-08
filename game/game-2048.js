const board = Array(4).fill().map(()=>Array(4).fill(0)), g2048 = document.getElementById('g2048');
function addTile(){
  let empty=[];
  for(let r=0;r<4;r++)for(let c=0;c<4;c++)if(!board[r][c])empty.push([r,c]);
  if(empty.length){let [r,c]=empty[Math.floor(Math.random()*empty.length)];board[r][c]=2;}
}
function render(){
  g2048.innerHTML='';
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    let cell=document.createElement('div');
    cell.className='gcell';
    cell.textContent=board[r][c]||'';
    g2048.appendChild(cell);
  }
}
function slide(row){
  let arr=row.filter(v=>v);
  for(let i=0;i<arr.length-1;i++)if(arr[i]==arr[i+1]){arr[i]*=2;arr[i+1]=0;}
  return arr.filter(v=>v).concat(Array(4-arr.filter(v=>v).length).fill(0));
}
function move(dir){
  let moved=false;
  if(dir=='ArrowLeft'){
    for(let r=0;r<4;r++){let old=board[r].slice();board[r]=slide(board[r]);if(board[r].join()!=old.join())moved=true;}
  }
  if(dir=='ArrowRight'){
    for(let r=0;r<4;r++){let old=board[r].slice();board[r]=slide(board[r].reverse()).reverse();if(board[r].join()!=old.join())moved=true;}
  }
  if(dir=='ArrowUp'){
    for(let c=0;c<4;c++){
      let col=board.map(r=>r[c]),old=col.slice(),ncol=slide(col);
      for(let r=0;r<4;r++)board[r][c]=ncol[r];
      if(ncol.join()!=old.join())moved=true;
    }
  }
  if(dir=='ArrowDown'){
    for(let c=0;c<4;c++){
      let col=board.map(r=>r[c]),old=col.slice(),ncol=slide(col.reverse()).reverse();
      for(let r=0;r<4;r++)board[r][c]=ncol[r];
      if(ncol.join()!=old.join())moved=true;
    }
  }
  if(moved)addTile(),render();
}
document.addEventListener('keydown',e=>{
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))move(e.key);
});
addTile();addTile();render();
