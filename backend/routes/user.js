const express = require('express')
const { getAllUser, deleteOneUserById, updateOneUserById,addNewUser, getOneUser, connectUser} = require('../controller/user')

const router = express()

router.post('/create', addNewUser)

// connect user
router.post('/connect', connectUser)
// get all user
router.get('/',getAllUser)

// get one user
router.get('/search/:id',getOneUser)
// update one user
router.put('/update/:id',updateOneUserById)
//  delete one user
router.delete('/delete/:id',deleteOneUserById)


module.exports = router
