import { useParams } from "react-router-dom"
import { useState , useEffect } from "react"
import axios from 'axios';
import styles from "./Drawing.module.css"
import Product from "./components/product/Product";
import DrawingGroup from "./components/drawingGroup/DrawingGroup";


const Drawing = () => {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const  { id } = useParams()

    const [drawings,setDrawings] = useState([])
    const [ products , setProducts ] = useState([])
    const [ artist , setArtist] = useState({
        id : "",
        name : "",
        pic : ""
    })
    const [order , setOrder] = useState({
        num : 1,
        selectedProduct : {price : 0},
    })

    //Get the drawings
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        axios({
            method : "GET",
            url : `/api/drawing/${id}`,
            baseURL : 'http://localhost:5000'

        }).then((response) => {
            setDrawings(response.data.data)
            setArtist(response.data.artist)
        })
    },[])

    //Get available Products
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        axios({
            method : "GET",
            url : "/api/product/",
            baseURL : "http://localhost:5000"
        }).then((response) => {
            setProducts(response.data)
            setOrder(prev => {
                return {
                    ...prev,
                    selectedProduct : response.data[0]
                }
            })}
        )
    },[])

    //Mapping the Products
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const mappedProducts = products.map(p =>
            <Product data={p} makeActive={setOrder} active={p == order.selectedProduct}  key={p.id} />
    )


    //Change Active Drawing
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Add the number of order
    const addOrder = () => {
        setOrder(prev =>{ return { ...prev , num : prev.num + 1 } } )
    }

    //remove the number of order
    const removeOrder = () => {
        if(order.num > 1)
            setOrder(prev =>{ return { ...prev , num : prev.num - 1 } } )
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const submitHandle = (e) => {
        e.preventDefault()
        console.log("you crazy bitch")
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        <div className={styles.container}>
        
            <div className={styles.drawingSection}>
                <DrawingGroup data={drawings} />
            </div>

            <div className={styles.detailsSection}>

                <div className={styles.artist}>
                    <span>Artist Name</span>: <a>{ artist.name }</a>
                </div>

                <div className={styles.products}>
                    <p>Product type:</p>
                    {mappedProducts}
                </div>

                <div className={styles.numberSection}>
                    <span>
                        Quantity: {order.num} <br />
                        <button onClick={addOrder}>+</button>
                        <button onClick={removeOrder}>-</button>
                    </span>
                </div>

                <div className={styles.priceSection}>
                    <p>Total Price:</p>
                    <span>
                        ${order.num * order.selectedProduct.price}
                    </span>
                </div>
                <hr />
                <form className={styles.form}>
                    <input type="hidden" value={order} />
                    <button className={styles.addToCart}>Add to the Cart</button>
                </form>
            </div>
        </div>
    )
}

export default Drawing