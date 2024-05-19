import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((result) => {
                if (!result) {
                    setIsLoggedIn(true)
                    setUser(result)
                    return
                }else{
                    setUser(null)
                    setIsLoggedIn(false)
                }
                })
            .catch((error) => {
                console.error(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }, [])  

    return (
        <GlobalContext.Provider 
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider