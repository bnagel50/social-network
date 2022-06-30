const { User, Thought } = require('../models');
const thoughtController = {
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                res.json(thought)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    findThoughts(req, res) {
        Thought.find()
        .select('-__v')
        .then(async (thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    findSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) => res.json(thought))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true },
        )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then(async (thought) => res.json(thought))
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true },
        )
        .then((thought) => {
            !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : res.json(thought)
        })
    },
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.body } },
            { new: true },
        )
        .then((thought) => {
            !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : res.json(thought)
        })
    }
}

module.exports = thoughtController