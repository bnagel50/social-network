const router = require('express').Router();

const {
    createThought,
    findThoughts,
    findSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

router.route('/').get(findThoughts).post(createThought);

router.route('/:thoughtId').get(findSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;