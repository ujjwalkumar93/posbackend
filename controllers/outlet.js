const Outlet = require("../models/outlet")


exports.createOutlet = (req,res) => {
    req.body["createdBy"] = req.params.userId
    const outlet = new Outlet(req.body)

    outlet.save((err,outlet) => {
        if(err){
            return res.status(400).json({
                error: "Not able to save outlet in DB"
            })
        }
        res.json({outlet})
    })
}

exports.getOutlet = (req,res) => {
    return res.json(req.outlet)

}

exports.updateOutlet = (req,res) => {
    const outlet = req.outlet;
    outlet.name = req.body.name;

    outlet.save((err, updatedOutlet) => {
        if(err){
            return res.status(400).json({
                error: "Failled to update outlet"
            });
        }
        res.json(updatedOutlet);
    })    

};

exports.getAllOutlet = (req,res) => {
    Outlet.find().exec((err,outlet) => {
        if(err){
            return res.status(400).json({
                error: "No outlet found in DB"
            });
        }
        res.json(outlet);
    })
};

exports.getOutletById = (req,res,next,id) => {
    Outlet.findById(id).exec((err,outlet) => {
        if(err){
            return res.status(400).json({
                error: "outlet not found"
            })
        }
        req.outlet = outlet
        next();
    })
}


