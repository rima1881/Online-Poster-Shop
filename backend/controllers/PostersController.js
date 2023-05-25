import Poster from "../models/Poster.js"


const GetPosters = async (req , res) => {
    const posters = await Poster.fetchAll()
    res.send(posters)
}

const GetPoster = (req , res) => {
    const posters = Poster.fetchAll()
    console.log(req.params.id)
    res.send("poster")
}

export { GetPoster , GetPosters}