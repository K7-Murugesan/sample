import React, { useContext } from 'react'
import { Context } from './Comp1'

export const Comp4 = ({newUser}) => {

    let valueFromContext = useContext(Context)

    console.log( valueFromContext );

  return (
    <div>
        <h6> {newUser} {valueFromContext.id} {valueFromContext.fName} </h6>
        <Context.Consumer>
            {
                (valueFromConsumer)=> <h1>
                    {valueFromConsumer.fName}
                </h1>
            }
        </Context.Consumer>
    </div>
  )
}
