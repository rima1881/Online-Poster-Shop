const signup = (req,res) => {
    res.status(201).json("ok baby")
    console.log(req.body)
}

export { signup }