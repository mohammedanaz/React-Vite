import React, {useContext} from 'react'
import { myContext } from '../../Context/Count'

export default function CountComponent() {
    const {count, incrimentCount} = useContext(myContext)
    console.log(count, incrimentCount);
  return (
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={incrimentCount}>Incrimrnt Count</button>
    </div>
  )
}
