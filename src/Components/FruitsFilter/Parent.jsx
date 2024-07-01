import React, {useState, useEffect} from 'react'
import Select from './Select'
import List from './List'


export default function Parent() {
       
    const [category, setCategory] = useState('Fruits')
    const style = {
        color: category==='Fruits'? 'blue' : 'red'
    }
    function handleFilterChange(event){
        setCategory(event.target.value)
    }

  return (
    <div className='d-flex justify-content-center'>
        <div className='w-25 bg-light mt-5 rounded-3'>
             <Select onChange={handleFilterChange} />
             <List category = {category} style={style} />
        </div>        
    </div>
  )
}
