import React from 'react'
import Select from './Select'

export default function List(props) {
    const items = [
        {id:1, name:'Apple', category:'Fruits'},
        {id:2, name:'Banana', category:'Fruits'},
        {id:3, name:'Orange', category:'Fruits'},
        {id:4, name:'Cabbage', category:'Vegies'},
        {id:5, name:'Potato', category:'Vegies'},
        {id:6, name:'Tomato', category:'Vegies'}
    ]
    return (
        <div >
           <ul>
                {
                    items.filter((item)=> item.category === props.category)
                    .map((item)=> (
                        <li key={item.id} style={props.style}>{item.name}</li>
                    ))
                }
           </ul>
        </div>
    )
}
