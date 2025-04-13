import React, {createContext,useState} from "react";
const iContext = createContext();
export default function IProvider({children}){
    const [currind, setInd] = useState(0);
    const setterInd= (curr) =>{
        setInd(curr);
    };
    return (
        <iContext.Provider value = {{currind,setterInd}}>
            {children}
        </iContext.Provider>
    )
}
export {iContext};