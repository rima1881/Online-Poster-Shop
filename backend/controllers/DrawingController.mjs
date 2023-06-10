import Drawing from "../models/Drawing.mjs"


const GetDrawings = (req,res) => {
    Drawing.findAll().then( row=>
        res.status(200).json(row)
    ).catch(
        res.status(500).json({ messge : "he is shit believe me!!!"})
    )
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