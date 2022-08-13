import { useContext,createContext,useState } from "react";

const Context=createContext()



 const ContextPage=({children})=>{
    const [box,setbox]=useState(false)

     const values={
        box
     }
    return(
     <Context.Provider value={{box,setbox}}>
        {children}
     </Context.Provider>
    )
}

export default ContextPage


export const Main=()=>{
    return useContext(Context)
 }