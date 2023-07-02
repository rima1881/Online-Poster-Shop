import Cookies from "js-cookie"
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {

    return useContext(AuthContext);
}

export default useAuth;


/*const useAuth = () => {


    const setAuth = (email,role,token) => {
        Cookies.set("auth",{email : email, role : role , accessToken : token})
    }

    const auth = Cookies.get("auth")


    return { auth , setAuth }

}

export default useAuth*/