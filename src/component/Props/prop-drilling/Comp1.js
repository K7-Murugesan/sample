import React, { createContext, useEffect, useState } from 'react'
import { Comp3 } from './Comp3'
import { Comp2 } from './Comp2'

export let Context = createContext();
export const Comp1 = () => {

    //Context API - 3 phase - 1)Creating Context, 2)Providing, 
    //3)Consuming - Consumer, useContext

    // console.log( Context );


    // let count = 0;

    // let updateCount = ()=>{
    //     count +=1
    //     console.log( count );
    // }
    
    let Provider = Context.Provider  // To provide a global value

    let [globalVal] = useState({id:1,fName:"xyz"})

    let [user] = useState( "Data From parent" )


  return (
    <Provider value={ globalVal }>
       <div>
       {/* <h1> {count} </h1>
       <button onClick={updateCount}>+</button> */}
         <Comp2 user = {user}/>
       </div>
    </Provider>
  )
}
