import Cookies from "js-cookie"
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const context = () => {

    return useContext(AuthContext);
}

const useAuth = () => {

    const { auth , setAuth } = context()


    const setUser = async (user) => {


        try{
            await setAuth(user)
            Cookies.set("email", user.email)
            Cookies.set("token",user.token)
        }
        catch(error){
            console.error(error)
        }


    }

    const user = auth

    const logout = () => {
        setUser({email : "" , roles : [] ,token : ""})
        Cookies.set("email", "")
        Cookies.set("token", "")
    }


    return { user , setUser , logout }

}


export default useAuth;
