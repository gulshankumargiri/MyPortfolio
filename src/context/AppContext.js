
import React, { createContext,  useState,useEffect } from "react";
import { education } from "../data";

// Create a new context
export const AppContext = createContext();


function AppContextProvider({ children }) {
  // Set initial value for isMenuOpen
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [post,setPost]=useState([]);

async function fetchingData(){
    
  try{
    const data=await fetch(education)
    const res=await data.json();
    console.log(res.title);
    setPost(res)
  }
  catch(e){
console.log("error" ,e)
setPost([])
  }
}
  
useEffect(()=>{
    fetchingData();
  },[])
  

  // Data filling
  const value = {
    loading,
    setLoading,

    isMenuOpen,
    setMenuOpen,

    post,
    setPost,
  };

  // Use AppContext.Provider (not AppContext.provider)
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
