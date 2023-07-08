import { Outlet } from "react-router-dom";
import { useState , useEffect } from "react"
import axios from 'axios';
import useAuth from '../hooks/useAuth'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Signup from "../components/signup/Signup"
import Login from "../components/login/Login"
import Cart from "../components/cart/Cart"
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import AdminNavbar from "../components/adminNavbar/AdminNavbar";


export default function Layout(){

    const [logingIn , setLoginIn] = useState(false)
    const [SigningUp , setSigningUp] = useState(false)
    const [ showCart , setShowCart ] = useState(false)
    const [ cartItems , setCartItems ] = useState([])

    const { user } = useAuth() 

    useEffect( () => {

        if(user.roles.includes(2))
            refreshCart()

    },[user])

    const deleteItem = (id) => {

        console.log(id)

    }


    const refreshCart = async () => {
        axios({
            method : "GET",
            url:'/api/user/cart',
            baseURL : 'http://localhost:5000',
            headers : {
                Authorization : user.token
            }
        }).then( response => {
            console.log(response)
            if(response.status == 200){
                setCartItems(response.data)
            }
        }).catch( err => 
            console.error(err)    
        )
    }

    return(
        <main>

            <Navbar user={user} loginBtnHandle={ () => setLoginIn(true) } signupBtnHandle={() => setSigningUp(true)} cartBtnHandle={() => setShowCart(prev => !prev)} />
            { user.roles.includes(1) && <AdminNavbar />}
            <Outlet />
            <Footer />
            <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
            <Signup on={SigningUp} closeBtnhandle={() => setSigningUp(false)}  />
            { user.roles.includes(2) &&  <Cart on={showCart} deleteItem={deleteItem} data={cartItems} />}
            <ScrollToTop />

        </main>
    )
}