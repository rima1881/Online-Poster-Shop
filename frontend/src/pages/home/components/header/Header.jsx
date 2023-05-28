
import styles from './Header.module.css'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header(){

    return(
        <div>
            <div className={styles.container} >
                <div className={styles.center}>
                <div className={styles.image}></div>
                <Typewriter
                    options={{
                        wrapperClassName : styles.writer,
                        loop : false,
                        strings : '<nav class="typewriter">Welcome to our little  Art Gallery</nav>',
                        autoStart : true,
                        cursor : null
                    }}
                >
                </Typewriter>
                    <div className={styles.searchContainer}>
                        <input className={styles.searchInput} type='test' placeholder='Search poster by name' />
                        <button className={styles.searchBtn}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}