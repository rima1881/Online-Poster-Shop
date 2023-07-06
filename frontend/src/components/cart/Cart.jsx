import styles from "./Cart.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import useAuth from "../../hooks/useAuth"

const Cart = (props) => {

    const { user } = useAuth()

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const deleteItem = (id) => {
        axios({
            method : "DELETE",
            url:`/api/user/cart/${id}`,
            baseURL : 'http://localhost:5000',
            withCredentials : true,
            headers : {
                Authorization : user.token
            }
        }).then(response => {
            if(response.status == 202)
                props.deleteItem(id)
        }).catch( err => 
            console.error(err)
        )
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const emptyCart = <span className={styles.empty}>
        Empty :(
    </span>


    ////////////////////////////////////////////////////

    const mappedItems = props.data.map(i => <li key={i.id} >
        <span>{i.name}</span>
        <span>${i.price} | <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(i.id)} className={styles.icon} /></span>
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