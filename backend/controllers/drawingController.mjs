import Drawing from "../models/Drawing.mjs"
import DrawingGroup from "../models/DrawingGroup.mjs"
import User from "../models/User.mjs"

/////////////////////////////////////////////////////////////////////////////////////////////////
const addDrawingGroup = async (req,res) => {
    const { name , url , resolution , userId , isDefault } = req.body

    try{

        //has to be fixed *********************************
        const group = await DrawingGroup.create({ userId : userId})

        const yo = await Drawing.create({name : name, url: url, resolution: resolution , isDefault : isDefault , drawingGroupId : group.id})

        res.status(201).json({message : "the drawing is added"})
    }
    catch (error){
        if(!error.statusCode)
            error.statusCode = 500
        res.status(error.statusCode).json({error : error})
    }

} 


const GetDefaultDrawings = async (req,res) => {

    const results = await Drawing.findAll({where : { isDefault : 1} , attributes : ["id","name" , "url", "drawingGroupId"]})

    res.status(200).json({data : results , num : results.length})
}

const GetDrawingGroup = async (req,res) => {
    const { id } = req.params

    try{
        const drawignGroup = await DrawingGroup.findByPk(id,{ include : [User]})

        if(!drawignGroup){
            const error = new Error("fuck you")
            error.statusCode = 404
            throw error
        }

        const drawings = await Drawing.findAll({where : { drawingGroupId : drawignGroup.id} , attributes : ["id" , "name" , "url" , "resolution" , "isDefault"] })

        if(drawings.length == 0){
            const error = new Error("fuck off bitch")
            error.statusCode = 404
            throw error
        }

        console.log(drawignGroup)

        res.status(200).json({ data : drawings , artist : { name : drawignGroup.user.name , id : drawignGroup.user.id}})

    }
    catch(error){
        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json({error : error.message})
    }
}

export { addDrawingGroup , GetDefaultDrawings , GetDrawingGroup}