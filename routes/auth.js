const express = require("express")
const {signUp, signin} = require("../controllers/auth")
const router = express.Router()
const { check } = require('express-validator');

// signup
router.post(
    "/signup",
    [
        check('fullName').isLength({ min: 3 }).withMessage("must be at least 3 chars long"),
        check('email').isEmail().withMessage('email is required'),
        check('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    ],
    signUp)
router.post(
    "/signin",
    [
        check('email').isEmail().withMessage('email is required'),
        check('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    ],
    signin)

module.exports = router