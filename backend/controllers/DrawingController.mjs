import Drawing from "../models/Drawing.mjs"

const GetDrawings = (req,res) => {
    Drawing.fetchAllPrimes().then( (rows) => {
        res.status(200).json({data : rows , num : rows.length })
    })
}


export { GetDrawings }