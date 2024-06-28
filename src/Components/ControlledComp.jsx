import React, {useState, useEffect} from "react";

export default function ControlledComp(){

    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('You enter:', name);
        return ()=>{
            console.log('Cleanup called', name);
        }
    },[name])

    const handleChange = (event)=>{
        setName(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Your name is: ${name}`)
        setName('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter Name" 
            value={name}
            onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
    )
}