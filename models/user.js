const { default: mongoose, model } = require("mongoose");
//var crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
var SHA256 = require("crypto-js/sha256");

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        maxlength : 60,
        trim : true 
    },
    email : {
        type : String,
        required : true,
        maxlength : 60,
        trim : true,
        unique : true
    },
    mobile : {
        type : String,
        maxlength : 12,
        trim : true 
    },
    encrypted_password : {
        type : String,
        trim : true,
        required : true,
    },
    salt : String,
    role : {
        type : Array,
        default : []
    }
}, { timestamps : true})
userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv4()
        this.encrypted_password = this.securePassword(password)
    })
    .get(function(){
        return this._password
    })

userSchema.methods = {
    authenticate : function(plainpassword){
        return this.securePassword(plainpassword) === this.encrypted_password
    },
    securePassword : function(plainpassword){
        if(!plainpassword) return "";
        console.log("returned")
        try {
            return SHA256(plainpassword).toString()
        } catch {
            console.error("unable to encrypt password");
        }
    }
}
module.exports = mongoose.model("user", userSchema)