const mongoose = require("mongoose")

const outletSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    address: {
        type: String,
        trim: true,
        maxlength: 32,
        unique: true
    },
    mobile: {
        type: String,
        trim: true,
        maxlength: 12,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        maxlength: 32,
        unique: true
    },
    yoe: {
        type: String,
        trim: true,
    },
    createdBy: {
        type: String,
        trim: true,
        maxlength: 32,
    }
},{timestamps: true})

module.exports = mongoose.model("Outlet", outletSchema);