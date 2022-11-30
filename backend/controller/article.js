const article = require("../models/article")

// add new article
exports.addNewArticle=async(req,res)=>{
try {

    const newNomarticle = await article.findOne({nom:req.body.nom})

    if(newNomarticle){
        return res.send({msg:'Article existe déja.', reponse:false})
    }else{

       const newarticle= new article({
            nom: req.body.nom,
            user: req.body.user,
            dateCreation: new Date,
        })
        await newarticle.save();
        console.log('saved')
        return res.status(200).send({msg:'success ', newarticle, reponse:true})
        }
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}



// get all article
exports.getAllArticle=async(req,res)=>{
    try {
        let articles= await article.find({}).sort({_id:-1}).populate('user', ['login',
     
        'numTel',
        'sexe',
        'dateNaissance',
        'roleUser',
        'dateCreation'])
        return res.status(200).send(articles)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one article
exports.getOneArticle=async(req,res)=>{
    try {
        let Article= await article.findById(req.params.id)
        return res.status(200).send({msg:'success',Article})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneArticleById=async(req,res)=>{
    try {
        let findArticle= await article.findById(req.params.id)
        if(!findArticle){
            return res.status(400).send({ errors: [{ msg: "no  Article with this id" }] })
        }
        let Imm=await article.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating Article succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for Article" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneArticleById=async(req,res)=>{
    try {
        let findArticle= await article.findById(req.params.id)
        if(!findArticle){
            return res.status(400).send({ errors: [{ msg: "no  Article with this id" }] })
        }
        await article.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}
