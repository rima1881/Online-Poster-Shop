import styles from "./Artist.module.css"
import Profile from "./components/profile/Profile"
import { useState } from "react"
import Add from "./components/add/Add"

export default function Artist(){

    const [ isAdding , setIsAdding] = useState(false)

    const handleAdd = () => {
        setIsAdding(true)
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.manage}>
                    <span className={styles.title}><a>Management</a></span>
                    <span><a>My Posters</a></span>
                    <span onClick={handleAdd}><a>Add a Poster</a></span>
                    <span><a>Add a Poster Group</a></span>
                    <span><a>Remove a Poster</a></span>
                    <span><a>Remove a Poster Group</a></span>
                </div>

                <div className={styles.statistics}>
                    Statistics will be added soon :)
                </div>
            </div>

            <Profile />
            <Add on={isAdding} closeBtnhandle={() => setIsAdding(false)}  />
        </>
    )
}