import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorComponent() {
    const error = useRouteError()
    console.log('error obj is:', error);
  return (
    <div>
        <p>
            <p>statusText is: {error.name}</p>
            <p>error msg is: {error.message}</p>
        </p>
    </div>
  )
}
