import styles from "./Account.module.css"
import { useEffect , useState } from "react"


export default function Account(){

    const [ orders , setOrders ] = useState([])
    const [ acount , setAccount] = useState({
        name : "",
        email : "",
        pic : "",
        addr1 : "",
        addr2 : "",
        post : ""
    })

    const mappedOrders = orders.length !=0  ?  orders.map( o => 
        <li>
            <span>o.date</span>
            <span>o.price</span>
        </li>
    ) : <span> nothing :(</span>

    return(
        <div className={styles.container}>
            <div className={styles.details}>
            </div>
            <div className={styles.order}>

                <div className={styles.orderHeader}>
                    <span>#</span>
                    <span>Date</span>
                    <span>$</span>
                </div>

                <ul>
                    {mappedOrders}
                </ul>
            </div>
        </div>
    )
}