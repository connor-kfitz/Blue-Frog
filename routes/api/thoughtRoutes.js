const router = require('express').Router();
const { getThoughts, 
        createThought,
    } = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought)

// router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;