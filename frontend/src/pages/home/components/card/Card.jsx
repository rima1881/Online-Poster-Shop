import styles from './Card.module.css'


export default function Card(props){


   const cardStyle = {
       backgroundImage : `url(http://localhost:5000/images/${props.data.url})`
   }


   return(
       <div className={styles.container}>
           <div className={styles.imgContainer}>
               <div style={cardStyle} className={styles.img}>

               </div>
           </div>
           

           <a className={styles.btn} href={`/drawing/${props.data.id}`} >
               <nav className={styles.btnText}>See more</nav>
           </a>

       </div>

   )
}