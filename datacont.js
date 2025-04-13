import React, {createContext,useState} from "react";
const sContext = createContext();
export default function SProvider({children}){
    const [datw, setData] = useState(null);
    const addData= (dat) =>{
        setData(dat);
    };
    return (
        <sContext.Provider value = {{datw ,addData}}>
            {children}
        </sContext.Provider>
    )
}
export {sContext};