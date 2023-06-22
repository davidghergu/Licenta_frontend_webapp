//import { createContext, useState } from "react";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);


    useEffect(() => {
        const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
        if (userFromStorage) {
          setAuth(prevAuth => ({
            ...prevAuth,
            roles: userFromStorage.roles
          }));
        }
      }, []);

      useEffect(() => {
        if (persist) {
          localStorage.setItem("persist", JSON.stringify(persist));
        } else {
          localStorage.removeItem("persist");
        }
      }, [persist]);


    return (
        <AuthContext.Provider value={{ auth, setAuth,persist, setPersist  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;