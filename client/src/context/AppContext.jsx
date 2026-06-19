import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props)=>{
    const [user,setUser] = useState(false);
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [credit,setCredit] = useState(false);

    const backendUrl = import.meta.env.BACKEND_URL

    const loadCredits = async ()=>{
        try{
            const {data} =  await axios.get(`${import.meta.env.VITE_API_URL}/api/users/credits`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      if(data.success){
        setCredit(data.credits)
        setUser(data.user.name)
      }
        }catch(error){
            toast.error(error.message);
        }
    }

    const logout = ()=>{
        localStorage.removeItem("token");
        setToken('');
        setUser(null);
    }

    useEffect(()=>{
        if(token){
            loadCredits();
        }
    },[token])

    const value = {
        user,setUser,token,setToken,credit,setCredit,backendUrl,loadCredits,logout
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider