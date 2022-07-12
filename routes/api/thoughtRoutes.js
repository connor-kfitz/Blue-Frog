const router = require('express').Router();
const { getThoughts, 
        createThought,
        getSingleThought,
        updateThought,
        deleteThought,
    } = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;