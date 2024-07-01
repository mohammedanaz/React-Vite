import React, { createContext, useState } from "react";

export const myContext = createContext();

const ProviderFn = ({children})=> {
    const [count, setCount] = useState(0);
    const incrimentCount = ()=> {
        setCount((prevCount)=> prevCount+1)
    }

    return (
        <myContext.Provider value={{count, incrimentCount}}>
            {children}
        </myContext.Provider>
    )
};

export default ProviderFn;