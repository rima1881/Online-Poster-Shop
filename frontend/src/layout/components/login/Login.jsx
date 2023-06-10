import styles from './Login.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAuth from '../hooks/useAuth';
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
            axios({
                method: 'put',
                url:'/api/auth/signup',
                baseURL : 'http://localhost:5000',
                headers : { 'Content-Type': 'application/json'},
                withCredentials: true,
                data : JSON.stringify ({
                email : loginData.email,
                pwd : loginData.password
                }),
                }).then( Response => {
                    console.log(JSON.stringify(Response?.data));
                    const accessToken = Response?.data?.accessToken;
                    const role = Response?.data?.role;
                    const { email , password } = loginData
                    setAuth({ email, password, role, accessToken });
                })

            props.closeBtnhandle()
        }
        catch(error){
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }



        props.closeBtnhandle()
    }

    return(
        <div className={ props.on ? styles.on : styles.off}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <span>{errMsg}</span>
                    <nav><FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} /></nav>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={loginData.email} name='email' type='text'/>
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