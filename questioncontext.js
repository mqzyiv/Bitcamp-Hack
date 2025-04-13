import React, {createContext,useState} from "react";
const qContext = createContext();
export default function QProvider({children}){
    const [wrongind, setWrongInd] = useState([]);
    const addInd= (wrong) =>{
       setWrongInd((prevItems)=>[...prevItems,wrong]);
    };
    return (
        <qContext.Provider value = {{wrongind,addInd}}>
            {children}
        </qContext.Provider>
    )
}
export {qContext};