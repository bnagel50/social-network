const router = require('express').Router();

const {
    createThought,
    findThoughts,
    findSingleThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(findThoughts).post(createThought);

router.route('/:thoughtId').get(findSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;