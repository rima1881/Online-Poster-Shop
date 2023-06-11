import styles from './Login.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function Login(props){

    const [loginData,setLoginData] = useState(
        {
            email : '',
            password : ''
        }
    )

    const [errMsg, setErrMsg] = useState('');
    const { setAuth } = useAuth();


    function handleChange(event){
        const { name , value} = event.target
        setLoginData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault()

        try{
            console.log("fuck")
            axios({
                method: 'post',
                url:'/api/auth/login',
                baseURL : 'http://localhost:5000',
                headers : { 'Content-Type': 'application/json'},
                withCredentials: true,
                data : JSON.stringify ({
                email : loginData.email,
                pwd : loginData.password
                }),
                }).then( Response => {
                    console.log(JSON.stringify(Response?.data));
                    console.log("hello world")
                    const accessToken = Response?.data?.accessToken;
                    const role = Response?.data?.role;
                    const { email , password } = loginData
                    setAuth({ email, password, role, accessToken });
                })

            props.closeBtnhandle()
        }
        catch(error){
            console.log(error)
            if (!error?.response) {
                setErrMsg('No Server Response');
                console.log("No Server Response")
            } else if (error.response?.status === 400) {
                console.log("Missing Username or Password")
                setErrMsg('Missing Username or Password');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
                console.log("Unauthorized")
            } else {
                setErrMsg('Login Failed');
                console.log("Login Failed")
            }
        }


    }

    return(
        <div className={ props.on ? styles.on : styles.off}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <span>{errMsg}</span>
                    <nav><FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} /></nav>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={loginData.email} name='email' type='email'/>
                    <label htmlFor='passsword'>Password:</label>
                    <input onChange={handleChange} value={loginData.password} name='password' type='password'/>
                    <button onClick={handleSubmit}>
                        <p>Login</p>
                    </button>
                    <span><a>Forgot my Password</a> | <a>Sign Up</a></span>
                    
                </form>
            </div>
        </div>
    )
}