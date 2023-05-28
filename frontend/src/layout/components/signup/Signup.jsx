import styles from './Signup.module.css'
import { useState , useEffect , useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


export default function Signup(props){

    const [ formData , setFormData] = useState(
        {
            username : '',
            email : '',
            password : '',
            passwordConf : '',
            address1 : '',
            address2 : '',
            post : ''
        }
    )

    const handleChange = (event) => {
        const { name , value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }


    async function handleSubmit(event){
        event.preventDefault()
        try{
            /*
            const response = await axios.post("/signup",
                JSON.stringify({ formData }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );*/

            axios({
                method: 'post',
                url:'/api/auth/signup',
                baseURL : 'http://localhost:5000',
                headers : { 'Content-Type': 'application/json'},
                data : JSON.stringify ({
                    username : formData.username,
                    email : formData.email,
                    password : formData.password,
                    address1 : formData.address1,
                    address2 : formData.address2,
                    post : formData.post
                }),
                
                
            }).then( Response => {
                console.log(Response)
            })
            
        }
        catch (error){
            throw error;
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

                    <label htmlFor='address1'>Address 1:</label>
                    <input type='text' name='address1' onChange={handleChange} value={formData.address1} required/>

                    <label htmlFor='address2'>Address 2:</label>
                    <input type='text' name='address2' onChange={handleChange} value={formData.address2} required/>

                    <label htmlFor='post'>Postal code :</label>
                    <input type='text' name='post' onChange={handleChange} value={formData.post} required/>

                    <button onClick={handleSubmit}>
                        <p>Sign Up</p>
                    </button>

                </form>
            </div>
        </div>
    )
}