import Poster from "../models/Poster.js"


const GetPosters = (req , res) => {

    Poster.fetchAll().then( (rows) => {
        res.send(rows)
    })

}

const GetPoster = (req , res) => {

    Poster.findById(1).then( row => {
        res.send(row)
    })

}

export { GetPoster , GetPosters}