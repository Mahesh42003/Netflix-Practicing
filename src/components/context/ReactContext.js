import { createContext, useContext, useState } from "react";
const CreatingContextFunction=createContext()
export const ProvidingFunction=({children})=>{
    const [currentLanguage,changingLanguage]=useState("English")
    return(
        <CreatingContextFunction.Provider value={{currentLanguage,changingLanguage}}>
            {children}
        </CreatingContextFunction.Provider>
    )
}
export const useData=()=>useContext(CreatingContextFunction)