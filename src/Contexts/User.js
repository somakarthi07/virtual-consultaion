import React, {useEffect, createContext, useState} from 'react'
import SERVER_URL from "../ServerURL";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const getCurrentUser = async () => {
            const url = `${SERVER_URL}/api/v1/currentuser`;
            const config = {method: "GET", headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}}
            const resp = await fetch(url, config);
            const data = await resp.json();
            console.log(data);
            setUser(data.currentuser);
            console.log(user);
        }
        if(!user){
            getCurrentUser();
        }
    }, [user])

  



    
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext};