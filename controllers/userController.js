const { User, Thought } = require('../models');

const userController = {
    createUser(req, res) {
        User.create(req.body)
            .then((user) => {
                res.json(user)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteUser(req, res) {

    },
    updateUser(req, res) {

    },
    findUsers(req,res) {
        User.find()
            .then(async (users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    findSingleUser(req, res) {

    },
}

module.exports = userController