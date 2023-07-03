import styles from './Signup.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'
import axios from 'axios';


export default function Signup(props){

    const [ formData , setFormData] = useState(
        {
            username : '',
            email : '',
            password : '',
            passwordConf : ''
        }
    )

    const { setUser } = useAuth()

    const handleChange = (event) => {
        const { name , value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    function validator(){
        return true
    }

    async function handleSubmit(event){
        event.preventDefault()

        if(validator()){
            try{
                const response =  await axios({
                    method: 'put',
                    url:'/api/auth/signup',
                    baseURL : 'http://localhost:5000',
                    headers : { 'Content-Type': 'application/json'},
                    data : JSON.stringify ({
                    name : formData.username,
                    email : formData.email,
                    pwd : formData.password
                    }),
                })

                const token = response?.data?.token;
                const roles = response?.data?.roles;
                const { email } = formData

                await setUser({ email : email, roles : roles, token : token })

                props.closeBtnhandle()

            }
            catch (error){
                console.error(error)
            }
        }

    }

    return(
        <div className={props.on ? styles.on : styles.off}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <nav><FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} /></nav>

                    <label htmlFor='username'>Username :</label>
                    <input type='text' name='username' onChange={handleChange} value={formData.username} required />

                    <label htmlFor='email'>Email :</label>
                    <input type='email' name='email' onChange={handleChange} value={formData.email} required />

                    <label htmlFor='password'>Password :</label>
                    <input type='password' name='password' onChange={handleChange} value={formData.password} required/>

                    <label htmlFor='passwordConf'>Password Confirmation :</label>
                    <input type='password' name='passwordConf' onChange={handleChange} value={formData.passwordConf} required/>

                    <button onClick={handleSubmit}>
                        <p>Sign Up</p>
                    </button>

                </form>
            </div>
        </div>
    )
}