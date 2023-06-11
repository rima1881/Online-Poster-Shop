import Drawing from "../models/Drawing.mjs"


const GetDrawings = async (req,res) => {

    try{
        const drawings  = await Drawing.findAll()
        res.status(200).json(drawings)
    }
    catch(error){

        if(!error.statusCode)
            error.statusCode

        res.status(error.statusCode).json({ messge : "he is shit believe me!!!"})
    }
}

const GetDrawing = (req,res) => {

}

const AddDrawing = (req,res) => {
}

const EditDrawing = (req,res) => {

}

const RemoveDrawing = (req,res) => {

}


export { GetDrawings , GetDrawing , AddDrawing , EditDrawing , RemoveDrawing }