import Cookies from "js-cookie"
import axios from "axios"

const useRefresh = async (setLoading , setAuth) => {

    const email = Cookies.get("email")
    const token = Cookies.get("token")

    if(!token || !email){
        Cookies.set("email","")
        Cookies.set("token","")
    }
    else{
        
        //has to be fixed *********************************
        const response = await axios({
            method: "Post",
            url: "/api/auth/refresh",
            baseURL : 'http://localhost:5000',
            headers : { 'Content-Type': 'application/json'},
            withCredentials: true
        })

        //has to be fixed *********************************
        if(response.status == 200)
            setAuth({email : email , role : 2001 ,accessToken : token})
        else{
            Cookies.set("email","")
            Cookies.set("token","")
        }

    }

    setLoading(false)
    
}

export default useRefresh