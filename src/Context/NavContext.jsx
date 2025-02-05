import { createContext, useState } from "react";

export let NavContext=createContext();
export default function NavContextProvider(props){
    const [nav, setnav] = useState(null)
    return <NavContext.Provider value={{nav,setnav}}>
        {props.children}
    </NavContext.Provider>
}