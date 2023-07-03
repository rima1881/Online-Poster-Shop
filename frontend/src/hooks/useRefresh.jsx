import Cookies from "js-cookie"
import axios from "axios"

const useRefresh = (setLoading , setUser) => {

    const email = Cookies.get("email")
    const token = Cookies.get("token")


    if(!token || !email){
        setUser({email : "",roles : [] , token : ""})
    }
    else{
        
        //has to be fixed *********************************
        axios({
            method: "Post",
            url: "/api/auth/refresh",
            baseURL : 'http://localhost:5000',
            headers : { 'Content-Type': 'application/json'},
            withCredentials: true,
            data : JSON.stringify({ token : token})
        }).then( (response) => {

            const roles = response.data.roles
            const cart = response.data.cart
            setUser({email : email , roles : roles ,token : token})

        }).catch( () => {
            
            setUser({email : "",role : [] , token : ""})

        })

    }

    setLoading(false)
    
}

export default useRefresh