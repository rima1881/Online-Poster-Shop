import styles from "./Product.module.css"

export default function Product(props){

    const isDisable = props.data.price == 0

    const handleClick = () => {
        if(!isDisable){
        props.makeActive(prev => { return {
            ...prev,
            selectedProduct : props.data
        }})
    }
    }



    return(
        <>
            <div onClick={handleClick} className={props.active ? styles.active : isDisable ? styles.disable :  styles.inActive}>
                <span className={styles.name}>
                    {props.data.name}
                </span>
                <span className={styles.price}>
                    {isDisable ? "Coming Soon" : `$${props.data.price}`}
                </span>
            </div>
        </>
    )
}