import { Outlet } from "react-router-dom";
import { useState } from "react"
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

    const { user } = useAuth() 

    console.log(user)

    return(
        <main>

            <Navbar user={user} loginBtnHandle={ () => setLoginIn(true) } signupBtnHandle={() => setSigningUp(true)} cartBtnHandle={() => setShowCart(prev => !prev)} />
            { user.roles.include(1) && <AdminNavbar />}
            <Outlet />
            <Footer />
            
            <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
            <Signup on={SigningUp} closeBtnhandle={() => setSigningUp(false)}  />
            <Cart on={showCart} />
            <ScrollToTop />

        </main>
    )
}