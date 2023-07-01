

exports.getUsers = (req, res)=>{
    res.json(`router: user Router, routUrl:${req.url}`)
 }

 exports.getUser =(req, res)=>{
    res.json({router:'get 1 user',userId: req.url})
 }

