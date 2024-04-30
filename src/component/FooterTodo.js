import React, { useState } from "react";

export const FooterTodo = () => {

  const [count, updateCount ] =  useState( 0 )
  const [state, setState] = useState( { count : 0 } )

  let date = new Date();
//   let count = 0; 

  function increase() {
     updateCount( (prevCount)=>prevCount+1  )
     updateCount( (prevCount)=>prevCount+1  )
        // count++   // console.log( count );
  }
  let decrease = () =>{
    // updateCount( count-1 )
    updateCount( (prevCount)=> prevCount-1 )
    updateCount( (prevCount)=> prevCount-1 )
    updateCount( (prevCount)=> prevCount-1 )
        // count--
        // console.log( count );
  }

  return (
    <footer>
      <button onClick={()=>increase()} > + </button>
      <h3> {count} </h3>
      <button onClick={()=>decrease()}> - </button>
      <h6> &copy; CopyRight {date.getFullYear()} </h6>
    </footer>
  );
};
