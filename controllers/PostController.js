const Post = require('../models/Post')
module.exports = {
    addPost: (req, res) => {

        let post = new Post(

            {
                title: req.body.title,
                description: req.body.description,
                lat: req.body.lat,
                long: req.body.long,
                image: req.body.image,
            }

        )
        post.save()
        console.log(post);
        res.send({
            status: "200",
            message: "succes"
        })
    },
    getAllPosts: async (req, res) => {
        let posts = await Post.find();
        console.log(posts);
        res.send({
            status: "200",
            result: posts
        });
    },
    getOnepost: async (req, res) => {
        let id = req.body.id
        let post = await Post.findById(id)

        console.log(post);
        res.send({
            status: "200",
            result: post
        });
    },
    getPost: async (req, res) => {
        let id = req.query.id
        let post = await Post.findById(id)

        console.log(post);
        res.send({
            status: "200",
            result: post
        });


    },

    deletePost: async (req, res) => {
        let id = req.query.id
        let post = await Post.findByIdAndDelete(id)
        if (!post)
            res.send({
                status: "200",
                result: "post not found"
            })
        else

            res.send({
                status: "200",
                result: "post delete"
            })


    }



}