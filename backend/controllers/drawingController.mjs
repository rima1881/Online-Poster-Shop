import Drawing from "../models/Drawing.mjs"
import DrawingGroup from "../models/DrawingGroup.mjs"

//has to be fixed ****************************************
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

    const results = await Drawing.findAll({where : { isDefault : 1} , attributes : ["id","name" , "url"]})

    res.status(200).json({data : results , num : results.length})
}

const GetDrawingGroup = (req,res) => {

}

export { addDrawingGroup , GetDefaultDrawings , GetDrawingGroup}