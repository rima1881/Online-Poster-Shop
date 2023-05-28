import { connection } from "../utils/database.js"
import multer from "multer"

export default class Drawing{

    constructor(name,url,size,artist_id,isDefault){
        this.name = name
        this.url = url
        this.size = size
        this.artist_id = artist_id
        this.isDefault = 1
        this.groupId = -1
    }

    setGroup(groupId){
        this.groupId = groupId
        this.isDefault = 0
    }

    setDefault(){
        this.isDefault = 1
    }

    validate(){
        return true
    }


    save(){

        if(this.validate()){
            //store the file to images
            this.savefile()

            //store img data into database
            this.saveToDB()

            return true
        }
        else{
            return false
        }
    }

    savefile(){
        

    }

    //database section
    saveToDB(){
        if(this.groupId !== -1){
            return connection.execute("INSERT INTO drawings (drawing_name,url,original_size,artist_id,group_id,isDefault) VALUES (?,?,?,?,?,?)",[this.name,this.url,this.size,this.artist_id,this.groupId,this.isDefault])
        }
        else{
            return connection.execute("INSERT INTO drawings (drawing_name,url,original_size,artist_id,isDefault) VALUES (?,?,?,?,?)",[this.name,this.url,this.size,this.artist_id,1])
        }
    }


    update(){
        return connection.execute()
    }
    remove(){
        return connection.execute()
    }

    //static methods
    static fetchById(id){

        return connection.execute()
    }

    static fetchAllPrimes(){
        return connection.execute("select id,drawing_name,artist_id,url from drawings where isDefault=1")
    }


    
}