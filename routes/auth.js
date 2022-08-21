const express = require("express")
const {signup, signin} = require("../controllers/auth")
const router = express.Router()
const { check } = require('express-validator');


router.post(
    "/signin",
    [
        check('email').isEmail().withMessage('email is required'),
        check('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    ],
    signin)
// signup
router.post( "/signup",
    [
        check('fullName').isLength({ min: 3 }).withMessage("must be at least 3 chars long"),
        check('email').isEmail().withMessage('email is required'),
        check('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    ],
    signup)

module.exports = router


// "/signup",

// signUp