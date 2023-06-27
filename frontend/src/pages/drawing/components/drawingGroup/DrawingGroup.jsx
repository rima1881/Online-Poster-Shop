import styles from "./DrawingGroup.module.css"

export default function DrawingGroup(props){

    let activeOne;


    console.log(props.data)

    const inActiveDrawings = props.data.map(d => {
        if(!d.isDefault)
            return <img src={`http://localhost:5000/images/${d.url}`} className={styles.inActive} />
        else
            activeOne = <img src={`http://localhost:5000/images/${d.url}`} className={styles.active} />
    })



    return(
        <div className={styles.container}>
            <div className={styles.activeContainer}>
                {activeOne}
            </div>
            <div className={styles.inActiveContainer}>
                {inActiveDrawings}
            </div>
        </div>
    )
}