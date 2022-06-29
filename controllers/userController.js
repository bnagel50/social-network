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
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : User.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { students: req.params.userId } },
              { new: true }
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { thoguhts: req.body } },
            { new: true }
            )
    },
    findUsers(req, res) {
        User.find()
            .select('-__v')
            .then(async (users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    findSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) => res.json(user)
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
}

module.exports = userController