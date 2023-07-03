import styles from './Login.module.css'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    const [ isSubmiting , setIsSubmiting ] = useState(false)

    const { setUser } = useAuth()


    function handleChange(event){
        const { name , value} = event.target
        setLoginData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmiting(true)

        try{

            const Response = await axios({
                method: 'post',
                url:'/api/auth/login',
                baseURL : 'http://localhost:5000',
                headers : { 'Content-Type': 'application/json'},
                withCredentials: true,
                data : JSON.stringify ({
                email : loginData.email,
                pwd : loginData.password
                }),
                })


                const token = Response?.data?.token;
                const roles = Response?.data?.roles
                console.log(roles)
                const { email } = loginData

                //has to be fixed *******************************************************
                await setUser({ email : email, role : 2001, token : token })

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

        setIsSubmiting(false)

    }


    const form = <form className={styles.form}>
            <nav>
                <FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} />
            </nav>
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} value={loginData.email} name='email' type='email'/>
            <label htmlFor='passsword'>Password:</label>
            <input onChange={handleChange} value={loginData.password} name='password' type='password'/>
            <button onClick={handleSubmit}>
                <p>Login</p>
            </button>
            <span><a>Forgot my Password</a> | <a>Sign Up</a></span>
        </form>


    const loader = <>
        <div className={styles.loader}></div>
    </>

    return(
        <div className={ props.on ? styles.on : styles.hidden}>  
                <div className={styles.container}>
                    {isSubmiting ? loader : form}
                </div>
        </div>
        
    )
}