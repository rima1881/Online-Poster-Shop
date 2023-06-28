import styles from "./DrawingGroup.module.css"

export default function DrawingGroup(props){

    const { changeDrawing } = props

    const Pic = (props) => {

        const inActiveClickHandle = () => {
            changeDrawing(prev => {
                return {
                    ...prev ,
                    selectedDrawing : props.data
                }
            })
        }
        return(
            <>
                <img className={styles.inActive} onClick={inActiveClickHandle} src={`http://localhost:5000/images/${props.data.url}`} />
            </>
        )
    }

    const inActiveDrawings = props.data.length > 1 ?  props.data.map(d => 
        <Pic url={`http://localhost:5000/images/${d.url}`} data={d} sample="test" key={d.id} />
    ) : null


    return(
        <div className={styles.container}>
            <div className={styles.activeContainer}>
            <img src={`http://localhost:5000/images/${props.activeOne.url}`} className={styles.active} />
            </div>
            <div className={styles.inActiveContainer}>
                {inActiveDrawings}
            </div>
        </div>
    )
}

