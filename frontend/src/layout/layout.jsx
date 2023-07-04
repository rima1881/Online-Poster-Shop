import { Outlet } from "react-router-dom";
import { useState } from "react"
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


    const refreshCart = async () => {
        axios({
            method : "GET",
            url:'/api/user/cart',
            baseURL : 'http://localhost:5000',
            headers : {
                Authorization : user.token
            }
        }).then( response => {
            if(response.status == 201){
                setCartItems(response.data.items)
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
            <button onClick={refreshCart}>click me</button>
            <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
            <Signup on={SigningUp} closeBtnhandle={() => setSigningUp(false)}  />
            { user.roles.includes(2) &&  <Cart on={showCart} data={cartItems} />}
            <ScrollToTop />

        </main>
    )
}