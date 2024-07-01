import React, {useState, useEffect} from 'react'

export default function Filtering() {

    const items = [
        {id:1, name:'Apple', category:'Fruits'},
        {id:2, name:'Banana', category:'Fruits'},
        {id:3, name:'Orange', category:'Fruits'},
        {id:4, name:'Cabbage', category:'Vegies'},
        {id:5, name:'Potato', category:'Vegies'},
        {id:6, name:'Tomato', category:'Vegies'}
    ]

    const [category, setCategory] = useState('Fruits')

    useEffect(()=>{
        console.log('category value is:', category);
    },[category])

    function handleFilterChange(event){
        setCategory(event.target.value)
    }

  return (
    <div className='d-flex justify-content-center'>
        <div  className='w-25 mt-3 bg-light p-4 rounded-3'>
            <div>
                <label className='text-info' htmlFor="filter-select">Filter</label>
                <select id='filter-select'
                    className='form-select mt-2' onChange={handleFilterChange}>
                    <option value={'Fruits'}>Fruits</option>
                    <option value={'Vegies'}>Vegies</option>
                </select>
            </div>
            <br />
            <div>
                <ul>
                    {items.filter((item)=> item.category === category)
                    .map((item)=> (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
