import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
 
    <div className="App">
     <div className='heading'>
     <h1>WELCOME TO THE COLOR GAME!</h1> 
      <Board></Board>
 
      </div>
    </div>
  );
}

function Board(){ 
  const [marks, setmarks] = useState([0,0,0,0,0,0,0,0,0])
  const [player,setPlayer]=useState(1)
function Board(){ 
  const [marks, setmarks] = useState([0,0,0,0,0,0,0,0,0])
  const [player,setPlayer]=useState(1)

useEffect(()=>{

  const comb=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
 
  for(let c of comb) {
    if(marks[c[0]]===1 && marks[c[1]]===1 &&  marks[c[2]]===1){
    var timeout=setTimeout(alertFun,1000);
      function alertFun(){
        alert('player 1 is the winner of the match');
      }
  
    }
    if(marks[c[0]]===2 && marks[c[1]]===2 &&  marks[c[2]]===2){
      let Timeout=setTimeout(alertFun,1000);
      function alertFun(){
        alert('player 2 is the winner of the match');
      }
     
    }
  }
},[marks])

const changeMark=(i)=>{
 const m=[...marks];
 if(m[i]===0){
  m[i]=player;
  setmarks(m);
  setPlayer(player===1?2:1);
 }else{
  alert('please click on another block');
 }

  }
  
return(
<div className="board">

  <div>
  <Block mark={marks[0]} pos={0} changeMark={changeMark}></Block>
  <Block mark={marks[1]} pos={1} changeMark={changeMark}></Block>
  <Block mark={marks[2]} pos={2} changeMark={changeMark}></Block>
  </div>
  <div>
  <Block mark={marks[3]} pos={3} changeMark={changeMark}></Block>
  <Block mark={marks[4]} pos={4} changeMark={changeMark}></Block>
  <Block mark={marks[5]} pos={5} changeMark={changeMark}></Block>
  </div>
  <div>
  <Block mark={marks[6]} pos={6} changeMark={changeMark}></Block>
  <Block mark={marks[7]} pos={7} changeMark={changeMark}></Block>
  <Block mark={marks[8]} pos={8} changeMark={changeMark}></Block>
  </div>
</div>);
}

function Block({mark,changeMark,pos}){ 
return(<div className={`block mark${mark}`} onClick={e=>changeMark(pos)}> </div>);
}
export default App;
