import styles from './Card.module.css'


export default function Card(props){

   const cardStyle = {
       backgroundImage : `url(/${props.url})`
   }


   return(
       <div className={styles.container}>
           <div className={styles.imgContainer}>
               <div style={cardStyle} className={styles.img}>

               </div>
           </div>
           

           <a className={styles.btn} href="#">
               <nav className={styles.btnText}>See more</nav>
           </a>

       </div>

   )
}