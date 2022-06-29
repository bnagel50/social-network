const router = require('express').Router();

const {
    createUser,
    deleteUser,
    updateUser,
    findUsers,
    findSingleUser
} = require('../../controllers/userController');

router.route('/').get(findUsers).post(createUser);

router.route('/:userId').get(findSingleUser).delete(deleteUser)

router.route('/:userId/thoughts').post(updateUser);

module.exports = router;