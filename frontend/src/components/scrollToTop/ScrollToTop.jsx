import { useState , useEffect } from "react";
import styles from "./ScrollToTop.module.css"

export default function ScrollToTop(){

    const [isVisible , setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200)
                setIsVisible(true)
            else
                setIsVisible(false)
        })

    },[])


    const clickhanlde = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return(
        <>
            <div className={styles.btn} onClick={clickhanlde}>
                <div className={isVisible? styles.active : ""}>
                    <span>Top</span>
                </div>
            </div>
        </>
    )

}