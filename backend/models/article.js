const mongoose = require('mongoose')
const deepPopulate = ('mongoose-deep-populate');

const categorieSchema = new mongoose.Schema({



 nom: {type: String},
 champObligatoire: {type: String},
 user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 dateCreation: {type: Date},

})





module.exports =mongoose.model('Categorie', categorieSchema)
