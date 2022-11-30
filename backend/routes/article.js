const express = require('express')
const { getAllArticle, deleteOneArticleById, updateOneArticleById,addNewArticle, getOneArticle } = require('../controller/article')

const router = express()

// add new immopilier
router.post('/create', addNewArticle)
// get all Article
router.get('/',getAllArticle)

// get one Article
router.get('/search/:id',getOneArticle)
// update one Article
router.put('/update/:id',updateOneArticleById)
//  delete one Article
router.delete('/delete/:id',deleteOneArticleById)
module.exports = router
