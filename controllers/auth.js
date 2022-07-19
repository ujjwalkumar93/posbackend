const User = require("../models/user")
const { body, validationResult } = require('express-validator');
exports.signUp = (req, res) => {
    const user = new User(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()
        })
    }
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                error : err,
            })
        }
        res.json(user._id)
    })
}

exports.signin = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()
        })
    }

    const {email, password} = req.body
    

}