const mongoose = require("mongoose")

const warehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    createdBy: {
        type: String,
        trim: true,
        // required: true,
        maxlength: 32,
    }
},{timestamps: true})

module.exports = mongoose.model("Warehouse", warehouseSchema);