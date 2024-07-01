import React, {useContext} from 'react'
import { myContext } from '../../Context/Count'

export default function About() {
    const {count, incrimentCount} = useContext(myContext)
  return (
    <div>
        <h1>About page.</h1>
        <h2>Count is: {count}</h2>
    </div>
  )
}
