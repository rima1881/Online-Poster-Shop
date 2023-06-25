import { connection } from "../utils/database.js"


export default class Poster {
    constructor(name,pic,size,artist_id){
        this.poster_name = name
        this.pic = pic
        this.poster_size = size
        this.artist_id = artist_id
    }

    validate(){
        return true
    }

    save(){

        return connection.execute("INSERT INTO posters (poster_name,pic,poster_size,ratio,price,artist_id) VALUES (?,?,?,?,?,?)",[this.poster_name,this.pic,this.poster_size,this.ratio,this.price,this.artist_id])
        
    }

    static findById(id){

        return connection.execute("select * from posters where id = ?",[id])

    }

    static fetchAll(){
        
        return connection.execute("select * from posters")

    }
    
}