import useAuth from "../hooks/useAuth"
import Cookies from "js-cookie"

const logout = () => {
    const { setAuth } = useAuth()
    
    setAuth("")
    Cookies.set("email", "")
    Cookies.set("token", "")

}

export default logout