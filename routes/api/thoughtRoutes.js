const router = require('express').Router();

const {
    createThought,
    findThoughts,
    findSingleThought,
} = require('../../controllers/thoughtController');

router.route('/').get(findThoughts).post(createThought);

router.route('/:thoughtId').get(findSingleThought);

module.exports = router;