import { createContext, useContext, useState } from "react";

export const userContext=createContext({
    user:null,
    logIn:()=>{},
    logOut:()=>{},
});

const USER={
    name:"guest",
    IsGuest:true,
};

export function UserContexProvider({children}){
    // this function name should be start capital "UserContextProvider"

    const [user,setUser]=useState(USER)

    function logIn(username){
        setUser({IsGuest:false, name:username })
    }
    function logOut(){
        setUser(USER)
    }

    return(
    <userContext.Provider value={{user,logIn,logOut}}>
       {children}
    </userContext.Provider>
    )

}


export function useUserContext(){
    const {user,logIn,logOut}=useContext(userContext)

    return {user,logIn,logOut};
}