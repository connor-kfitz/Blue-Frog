const router = require('express').Router();
const { getThoughts, 
        createThought,
        getSingleThought
    } = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getSingleThought)//.put(updateUser).delete(deleteUser);

// router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;