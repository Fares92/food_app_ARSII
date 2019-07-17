const User = require('../models/User')
module.exports = {

    adduser: (req, res) => {

        let user = new User(

            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
            }

        )

        user.save()
        console.log(user);
        res.send({
            status: "200",
            message: "succes"
        })


    },
    getalluser: async (req, res) => {
        let users = await User.find();
        console.log(users);
        res.send({
            status: "200",
            result: users
        });
    },
    login: async (req, res) => {
        User.find({
            $and: [{
                    email: req.body.email
                },
                {
                    password: req.body.password
                }
            ]
        }).exec(function (err, result) {
            if (err) throw err;
            res.send(JSON.stringify(result))
            console.log(result);
        });

    }
    // login: async (req, res) => {
    //     let email = req.query.email
    //     // let password = req.query.password
    //     let user = await User.findOne(email)
    //     if (user)
    //         res.send({
    //             status: "200",
    //             result: "email not found"
    //         })

    //     else

    //         res.send({
    //             status: "200",
    //             result: "email found"
    //         })


    // }




}