const postctrl = require('../controllers/PostController')
const userctrl = require('../controllers/UserController')
const express = require('express')
const router = express.Router()


router.post('/addPost', postctrl.addPost)
router.get('/getAllPosts', postctrl.getAllPosts)
router.post('/getOnepost', postctrl.getOnepost)
router.post('/getPost', postctrl.getPost) //deletePost
router.delete('/deletePost', postctrl.deletePost)


//-------------- USER CONTROLLER------------------------

router.post('/adduser', userctrl.adduser)
router.get('/getalluser', userctrl.getalluser) //login
router.post('/login', userctrl.login)



module.exports = router