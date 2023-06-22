import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    //const { auth } = useContext(AuthContext);
    const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
   // console.log(userFromStorage.roles);
   //const { auth } =userFromStorage.roles  
    const  auth  =useContext(AuthContext);

    if (userFromStorage) {
        auth.roles = userFromStorage.roles;
      }

    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    //return useContext(AuthContext);
    return auth;
}

export default useAuth;