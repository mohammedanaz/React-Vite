import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function User() {
    const {userName, userId} = useParams();
  return (
    <div>
        <h1>User info Page</h1>
        <p>
            User name is: {userName} and Id is: {userId}
        </p>
        <Link to='/'>Go back</Link>
    </div>
  )
}
