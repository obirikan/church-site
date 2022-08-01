import { useContext,createContext,useState } from "react";

const Context=createContext()



 const ContextPage=({children})=>{
    const [name,setname]=useState('loladwd')
     const values={
        name
     }
    return(
     <Context.Provider value={{values}}>
        {children}
     </Context.Provider>
    )
}

export default ContextPage


export const Main=()=>{
    return useContext(Context)
 }