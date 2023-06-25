import { useState } from "react"
import styles from "./Add.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Add(props){

    const [formData,setFormData] = useState({
        poster_name : "",
        poster_size : "",
        price : ""
    })


    const handleChange = (event) => {
        const { name , value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        props.closeBtnhandle()
    }

    return(
        <div className={ props.on ? styles.on : styles.off}>
            <div className={styles.container}>
                <form className={styles.form}>

                    <nav><FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} /></nav>

                    <label htmlFor="poster_name">Name:</label>
                    <input onChange={handleChange} value={formData.poster_name} name='poster_name' type='text'/>

                    <label htmlFor="file">File:</label>
                    <input type="file" name="poster_file" />

                    <label htmlFor="poster_size">Poster size:</label>
                    <input type="text" name="poster_size" onClick={handleChange} value={formData.poster_size}/>

                    <label htmlFor="poster_price">Price:</label>
                    <input type="text" name="poster_price" onClick={handleChange} value={formData.price}/>

                    <input type="hidden" />

                    <button onClick={handleSubmit}>
                        <p>Add</p>
                    </button>
                    
                </form>
            </div>
        </div>
    )
}