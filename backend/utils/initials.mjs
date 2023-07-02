import Role from "../models/Role.mjs";
import User from "../models/User.mjs";
import UserRole from "../models/UserRole.mjs";
import bcrypt from 'bcryptjs'


const initials = async () => {

    //admin info *******************************************************
    const adminName = "amir"
    const adminEmail = "amd.gharibipour@outlook.com"
    const adminPassword = "test123"


    const roles = await Role.findAll()


    if(roles.length == 0) {


        const hashedPassword = await bcrypt.hash(adminPassword,12)

        //creating roles
        const adminRole = await Role.create({name : "admin"})
        const userRole = await Role.create({ name : "user"})

        //creating admin user
        const admin = await User.create({name : adminName , email : adminEmail , pwd : hashedPassword })


        await admin.createCart()


        //assigning admin roles
        admin.addRole(userRole , { throw : UserRole })
        admin.addRole(adminRole , { throw : UserRole })


    }


}

export default initials