import styles from './Home.module.css'
import Header from "./components/header/Header"
import List from "./components/list/List"
import { useState , useEffect } from 'react';
import axios from 'axios';


export default function Home(){

    const [listData, setListData] = useState([])

    useEffect(() => {

        axios({
            method: 'get',
            url:'/api/drawing',
            baseURL : 'http://localhost:5000',
            headers : {
                "Content-Type" : "application/json"
            }
        }).then( Response => {
            setListData(Response.data.data)
        })
    },[])



    return(
        <>
        
            <Header />
            <div className={styles.container}>

                <div className={styles.headerContainer}>
                    <p className={styles.header}> Our Posters!!!</p>
                </div>

                <hr  className={styles.line}/>

                <div className={styles.list}>
                    <List data={listData} />
                </div>
            </div>

        </>
    )
}