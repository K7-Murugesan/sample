import React, { useState } from 'react'
import { ChildProps } from './ChildProps'
import ChildClassProps from './ChildClassProps'

export const ParentComp = () => {

    let [data, setData] = useState( ["Bootstrap","materail UI", "Semantic UI", "Ant Design", "Chakra UI"] )

  return (
    <div>
        <ChildProps data = "Im from Parent"  >
            
        </ChildProps>
        <ChildClassProps arr = {data} >
            <div style={ {width:"100px", backgroundColor:"papayawhip", color:"gray", boxShadow:"2px 2px 2px black" } }>
                <h1>Children Props</h1>
            </div>
        </ChildClassProps>
    </div>
  )
}
