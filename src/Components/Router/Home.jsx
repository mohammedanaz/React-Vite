import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to='/user/user1/1'>User-1</Link></li>
          <li><Link to='/user/user2/2'>User-2</Link></li>
          <li><Link to='/user/user3/3'>User-3</Link></li>
        </ul>
    </div>
  )
}
