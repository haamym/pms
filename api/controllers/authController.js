

exports.register = async(req, res)=>{
    res.json({router:'register',userId: req.url})
 }

 exports.login =(req, res)=>{
    res.json({router:'login',userId: req.url})
 }