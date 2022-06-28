const router = require('express').Router();

const {
    createUser,
    deleteUser,
    updateUser,
    findUsers,
    findSingleUser
} = require('../../controllers/userController');

router.route('/').get(findUsers).post(createUser);

module.exports = router;