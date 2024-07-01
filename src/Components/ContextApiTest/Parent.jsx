import React from 'react'
import Home from './Home'
import About from './About'
import ProviderFn from '../../Context/Count'

export default function Parent() {
  return (
    <ProviderFn>
        <div>
            < Home />
            <About />
        </div>
    </ProviderFn>
        
  )
}
