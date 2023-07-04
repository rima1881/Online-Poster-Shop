import styles from "./Cart.module.css"
import { useEffect , useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const Cart = (props) => {

    useEffect(() => {

    },)

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const emptyCart = <span className={styles.empty}>
        Empty :(
    </span>

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const deleteItem = () => {
        console.log("fuck off")
    }

    ////////////////////////////////////////////////////

    const mappedItems = props.data.map(i => <li>
        <span>{i.name}</span>
        <span>${i.price} | <FontAwesomeIcon icon={faTrash} onClick={deleteItem} className={styles.icon} /></span>
    </li>)


    ////////////////////////////////////////////////////


    const filledCart = <>
        {mappedItems}
        <li className={styles.checkoutLine}>
            <form>
                <button>Checkout</button>
            </form>
        </li>
        <li className={styles.DeleteLine}>
            <form>
                <button>Delete All</button>
            </form>
        </li>
    </>





   //////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div className={styles.container}>

            <ul className={props.on ? styles.active : ""}>

                {props.data.length == 0 ? emptyCart : filledCart}

            </ul>
            
        </div>
    )
}

export default Cart