const express = require("express")
const router = express.Router()

const {createOutlet, getOutlet,updateOutlet,getAllOutlet,getOutletById} = require("../controllers/outlet")
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

// params
router.param("userId",getUserById)
router.param("outletId",getOutletById)

//actual routers
router.post("/outlet/create/:userId",
    // isSignedIn,
    // isAuthenticated,
    // isAdmin,
    createOutlet)
router.get("/outlet/:outlet",getOutlet)
router.get("/outletes",getAllOutlet)

router.put("/outlet/:outletId/:userId",
    // isSignedIn,
    // isAuthenticated,
    // isAdmin,
    updateOutlet
)

module.exports = router