const router = require('express').Router();

const {
    createUser,
    deleteUser,
    updateUser,
    findUsers,
    findSingleUser
} = require('../../controllers/userController');

router.route('/').get(findUsers).post(createUser);

router.route('/:userId').get(findSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;