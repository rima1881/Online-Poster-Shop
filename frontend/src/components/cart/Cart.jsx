import styles from "./Cart.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faImage } from "@fortawesome/free-solid-svg-icons"

const Cart = (props) => {


    return (
        <div className={styles.container}>
            <ul className={props.on ? styles.active : ""}>
                <li>
                    <span>Item 1</span>
                    <span>$4 | <FontAwesomeIcon icon={faTrash} className={styles.icon} /></span>
                </li>
                <li>
                    <span>Item 1</span>
                    <span>$4 | <FontAwesomeIcon icon={faTrash} className={styles.icon} /></span>
                </li>
                <li>
                    <span>Item 1</span>
                    <span>$4 | <FontAwesomeIcon icon={faTrash} className={styles.icon} /></span>
                </li>
                <li>
                    <span>Item 1</span>
                    <span>$4 | <FontAwesomeIcon icon={faTrash} className={styles.icon} /></span>
                </li>
                <li>
                    <span>Item 1</span>
                    <span>$4 | <FontAwesomeIcon icon={faTrash} className={styles.icon} /></span>
                </li>
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
            </ul>
            
        </div>
    )
}

export default Cart