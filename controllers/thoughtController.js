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
}

module.exports = thoughtController