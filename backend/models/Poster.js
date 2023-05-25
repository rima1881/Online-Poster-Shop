import { pool } from "../utils/database.js"


export default class Poster {
    constructor(id,name,size,price,artist_id){
        this.id = id
        this.name = name
        this.size = size
        this.price = price
        this.artist_id = artist_id
    }

    save(){
        console.log(`Product with id ${this.id} is saved`)
    }

    static findById(id){
        console.log(id)
    }

    static async fetchAll(){
        let conn
        let rows
        try {
            conn = await pool.getConnection()
            rows = await conn.query("select * from posters")

        } catch (error) {
            throw error
        } finally {
            conn ? conn.end() : null

            return rows
        }

    }
    
}