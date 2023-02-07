import logo from './logo.svg';
// import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
// const [list,setlist]=useState([])
// const [input,setinput]=useState("")

// const addtodo=(todo)=>{
//   const newtodo={
//     id:Math.random(),
//     todo:todo
//   }

//   setlist(...list,newtodo)

//   setinput("")


const [arr,setarr]=useState([""])
const [text,settext]=useState("")

let add=()=>{
arr.push(text)
setarr([...arr])
}
let delall=()=>{
  setarr([""])
}




  return (
    <div className="App">
      <header className="App-header">
      <h1>Todo List</h1>
       {/* <h1>Todo List</h1>
      <input  value={input} onChange={(e)=>setinput(e.target.value)}></input>
      <button onClick={()=>addtodo(input)}>add</button>
      <ul>
        {list.map((todo)=>{
          <li key={todo.id}>
            {todo.todo}
            <button>Edit</button>
          </li>
        })}
      </ul> */}
    

    {arr.map((x,i)=>{
      return(
      <p key={i}>{x}</p>)
    })}
     <input onChange={(e)=>settext(e.target.value) } placeholder={"enter"}></input>
    <p>{text}</p>
    <button onClick={add}>add</button>
    <button onClick={delall}>delt all</button>
    






      </header>
    </div>
  );
  }
  
export default App;
