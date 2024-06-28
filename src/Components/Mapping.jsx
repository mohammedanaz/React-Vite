import React from "react";

function Mapping(){

    const arr = ['name1', 'name2', 'name3', 'name4', 'name5']

    return(
        <>
            <h1>Name List is:</h1><br />
            <ul>
                {arr.map((name, index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    )
}

export default Mapping;