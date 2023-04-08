import { createContext} from "react";
import { useState } from "react";

const loginContext = createContext();

export const LoginContextProvider = () => {
    const[islogin,setIslogin]=useState(false);

    const loginHandler=()=>{
        setIslogin(!islogin);
    }
    
    
    const contextValue={
        isLogin:islogin,
        setLogin:loginHandler
    }
    return <loginContext.Provider value={contextValue}>

    </loginContext.Provider>
}
export default loginContext;

    