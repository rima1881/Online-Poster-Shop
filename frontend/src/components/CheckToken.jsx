import { useState , useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefresh from "../hooks/useRefresh";
import useAuth from "../hooks/useAuth";

const CheckToken = () => {

    const [ loading , setLoading] = useState(true)
    const { setAuth } = useAuth()

    useEffect( () => {useRefresh(setLoading, setAuth)},[])

    return(
        loading ? <p>loading ...</p> : <Outlet />
    )

}

export default CheckToken