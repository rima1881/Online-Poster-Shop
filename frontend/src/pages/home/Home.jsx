import styles from './Home.module.css'
import Header from "./components/header/Header"
import List from "./components/list/List"
import { useState , useEffect } from 'react';
import axios from 'axios';


export default function Home(){

    const [listData, setListData] = useState([])

    useEffect(() => {
        /*
        fetch('http://localhost:8080/api/posters')
            .then(Response => Response.json())
            .then(data => setListData(data))

            console.log('Request was sent')*/

        axios({
            method: 'get',
            url:'/api/posters',
            baseURL : 'http://localhost:5000'
        }).then( Response => {
            setListData(Response.data)
        })
    },[])



    return(
        <>
        
            <Header />

            <div className={styles.headerContainer}>
                <p className={styles.header}> Our <span className={styles.headerInner}>&nbsp;Posters!!! </span></p>
            </div>

            <hr  className={styles.line}/>

            <div className={styles.container}>
                <List data={listData} />
            </div>

        </>
    )
}