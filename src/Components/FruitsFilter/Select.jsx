import React from 'react'

export default function Select(props) {
  
  return (
    <div className='p-3'>
        <label htmlFor="filter-select">Filter</label>
        <select className='form-select' 
            name="filter-select" 
            id="filter-select"
            onChange={props.onChange}>
            <option value="Fruits">Fruits</option>
            <option value="Vegies">Vegies</option>
        </select>
    </div>
  )
}
