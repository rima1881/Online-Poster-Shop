import { pool ,connection } from "../utils/database.js"


export default class Poster {
    constructor(id,name,size,price,artist_id){
        this.id = id
        this.name = name
        this.size = size
        this.price = price
        this.artist_id = artist_id
    }

    save(){

        connection.execute("INSERT INTO posters () VALUES (?,?,?,?)")
        
    }

    static findById(id){

        return connection.execute("select * from posters where id = ?",[id])

    }

    static fetchAll(){
        
        return connection.execute("select * from posters")

    }
    
}