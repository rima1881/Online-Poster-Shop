import Poster from "../models/Poster.js"


const GetPosters = (req , res) => {

    Poster.fetchAll().then( (rows) => {

        res.status(200).json({data : rows , num : rows.length })
    })

}

const GetPoster = (req , res) => {

    Poster.findById(1).then( row => {
        res.send(row)
    })

}

const AddPoster = (req , res) => {
    console.log(req.body)

    const p = new Poster(req.body.poster_name, req.body.pic, req.body.poster_size , req.body.ratio , req.body.price , req.body.artist_id )

    if(p.validate()){
        p.save()
        res.status(201).json({ message : "the poster is added"})
    }
    else{
        res.status(403).json({ message : "there is an error with inserted data"})
    }

}

const EditPoster = (req, res) => {
    console.log(req.body)
}

const RemovePoster = (req , res) => {
    console.log(req.body)
}

export { GetPoster , GetPosters , AddPoster , EditPoster , RemovePoster}