import Cookies from "js-cookie"
import axios from "axios"

const useRefresh = async (setLoading , setUser) => {

    const email = Cookies.get("email")
    const token = Cookies.get("token")


    if(!token || !email){
        setUser({email : "",role : 0 , token : ""})
    }
    else{
        
        //has to be fixed *********************************
        const response = await axios({
            method: "Post",
            url: "/api/auth/refresh",
            baseURL : 'http://localhost:5000',
            headers : { 'Content-Type': 'application/json'},
            withCredentials: true,
            data : JSON.stringify({ token : token})
        })

        //has to be fixed *********************************
        if(response.status == 200)
            setUser({email : email , role : 2001 ,token : token})
        else{
            setUser({email : "",role : 0 , token : ""})
        }

    }

    setLoading(false)
    
}

export default useRefresh