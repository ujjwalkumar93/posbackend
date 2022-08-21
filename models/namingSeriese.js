const { default: mongoose } = require("mongoose");

const nammingSerieseSchema = new mongoose.Schema({
    doctype : {
        type : String,
        enum : ["user", "company", "warehouse", "category", "item", "stock", "role and permission"]
    },
    nammingSeriese : {
        type : String,
        required : true,
        trim : true
    },
    comment : {
        type : Array,
        default : []
    }
}, {timestamps : true})