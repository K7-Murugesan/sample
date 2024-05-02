import React, { createContext, useState } from 'react'
import { Comp3 } from './Comp3'
import { Comp2 } from './Comp2'

export let Context = createContext();
export const Comp1 = () => {

    //Context API - 3 phase - 1)Creating Context, 2)Providing, 
    //3)Consuming - Consumer, useContext

    // console.log( Context );
    
    let Provider = Context.Provider  // To provide a global value

    let [globalVal] = useState({id:1,fName:"xyz"})

    let [user] = useState( "Data From parent" )

  return (
    <Provider value={ globalVal }>
       <div>
         <Comp2 user = {user}/>
       </div>
    </Provider>
  )
}
