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
              { $pull: { users: req.params.userId } },
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
            { $set: req.body },
            { new: true }
            )
            .then((user) => {
                !user
              ? res.status(404).json({ message: 'No such user exists' })
              : res.json(user)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
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
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id : req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true },
        )
        .then((friend) => {
            !friend
          ? res.status(404).json({ message: 'No such friend exists' })
          : res.json(friend)
        });
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true },
        )
        .then((friend) => {
            !friend
          ? res.status(404).json({ message: 'No such friend exists' })
          : res.json(friend)
        })
    }
}

module.exports = userController