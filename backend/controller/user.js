const user = require("../models/user")
const bcrypt = require ("bcrypt")

const { exists } = require("../models/user");

    
// add new user
exports.addNewUser=async(req,res)=>{

 

try {
    const newuser= new user({
        login: req.body.login,
       password: bcrypt.hashSync(req.body.password, 10),
       // password: req.body.password,
        numTel: req.body.numTel,
        sexe: req.body.sexe,
        dateNaissance: req.body.dateNaissance,
        roleUser: req.body.roleUser,
        dateCreation: new Date
    })
    await newuser.save();
    console.log('saved')
    return res.status(200).send({msg:'success ', newuser})
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}
    




//se connecter 

exports.connectUser = async(req,res)=>{

   

    const { login, password } = req.body
    const newuser = await user.findOne({login})
    console.log(login)
    console.log(password)
    console.log(newuser.password)
        if (newuser) {
            
            bcrypt.compare(password, newuser.password, function (err, result) {
                
                if (err) {
                    console.log(err)
                    res.status(400).send({
                        msg: 'Vous netes pas connecter', reponse: false
                    }) 
                }

                if(result){
                    res.status(200).send({
                        msg: 'Vous etes connecter', reponse: true, id:newuser._id
                    })
                }

            }
        )}
        else{
            res.status(400).send({
                msg: 'Password or Login incorrect', reponse: false
            })
        }

         
}
                
//}
// get all user
exports.getAllUser=async(req,res)=>{
    try {
        let users= await user.find({}).sort({_id:-1})
        return res.status(200).send(users)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one user
exports.getOneUser=async(req,res)=>{
    try {
        let User= await user.findById(req.params.id)
        return res.status(200).send({msg:'success',User})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneUserById=async(req,res)=>{
    try {
        let findUser= await user.findById(req.params.id)
        if(!findUser){
            return res.status(400).send({ errors: [{ msg: "no  User with this id" }] })
        }
        let Imm=await user.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating User succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for User" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneUserById=async(req,res)=>{
    try {
        let findUser= await user.findById(req.params.id)
        if(!findUser){
            return res.status(400).send({ errors: [{ msg: "no  User with this id" }] })
        }
        await user.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}