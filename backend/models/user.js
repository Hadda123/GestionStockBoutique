const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    nom:{type:String}, 
    prénom:{type:String},
    email:{type:String},
    login:{type:String},
    password:{type:String},
    numTel:{type:String},
    sexe:{type:String},
    dateNaissance:{type:String},
    roleUser:{type:String},
    dateCreation: {type: Date}
    });
    module.exports = mongoose.model("User",UserSchema);