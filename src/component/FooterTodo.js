import React, { useState } from "react";

export const FooterTodo = () => {

  const [count, setCount ] =  useState( 0 )
  const [state, setState] = useState( { count : 0 } )
  const[toggle, setToggle] = useState(false)

  let date = new Date();
//   let count = 0; 

  function increase() {

    setCount( (prevState)=>{ return prevState+1 } ) // 1
    setCount( (prevState)=>prevState+1 ) //2
    // setCount( (prevState)=>prevState+1) // 3
    // setCount( (prevState)=>prevState+1 ) // 4

  }
  let decrease = () =>{
    setCount( count-1 )
    // setCount( (prevCount)=> prevCount-1 )
    // setCount( (prevCount)=> prevCount-1 )
    // setCount( (prevCount)=> prevCount-1 )
        // count--
        // console.log( count );
  }
  let toggleElement = () =>{
    setToggle( !toggle )
  }
  
  return (
    <footer>
      <button onClick={()=>increase()} > + </button>
      <h3> {count} </h3>
      <button onClick={()=>decrease()}> - </button>

      <button onClick={ toggleElement }> Toggle </button>
      { toggle && <h6> &copy; CopyRight {date.getFullYear()} </h6> }
      { toggle ? <CompTrue/> : <CompFalse/> }
      
    </footer>
  );
};

function CompTrue(){
  return (
    <h1> Bootstrap </h1>
  )
}
function CompFalse(){
  return (
    <h1> Material UI </h1>
  )
}