const signup = (req,res) => {
    res.send("ok baby")
    console.log(req.query.username)
}

export { signup }