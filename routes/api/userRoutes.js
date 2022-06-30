const router = require('express').Router();

const {
    createUser,
    deleteUser,
    updateUser,
    findUsers,
    findSingleUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

router.route('/').get(findUsers).post(createUser);

router.route('/:userId').get(findSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;