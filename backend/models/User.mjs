import { connection } from "../utils/database.js"

export default class User{

    constructor(email, pwd){
        this.pwd = pwd
        this.email = email
    }

    setAddress(addr1,addr2,postalCode){
        this.addr1 = addr1
        this.addr2 = addr2
        this.postalCode = postalCode
    }


    validate(){
        return true
    }

    //database
    checkUser(){

    }

    addUser(username,role){
        
        this.username
        this.role

        if(this.validate()){
            return connection.execute()
        }
        else{
            return false
        }
    }
    

}