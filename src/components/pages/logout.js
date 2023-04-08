
import { useEffect } from "react";
import { Navigate } from "react-router-dom";


function Logout(){
    useEffect(()=>{
        localStorage.clear();
        
    })
    return <Navigate to ='/home'/>
    

}
export default Logout;