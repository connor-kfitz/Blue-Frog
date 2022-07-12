const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
                )
                .catch((err) => res.status(500).json(err));
      },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
      },
    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
    addFriend(req, res) {

      User.findOne({ _id: req.params.userId})
        .then((user) => {
          if(!user) {
            res.status(404).json({ message: 'No user with this id exists!' })
          } else {
            User.findOne({ _id: req.params.friendId })
              .then((friend) => {
                if(!friend) {
                  res.status(404).json({ message: 'No friend with this id exists!' })
                }  else {
                  res.json(friend)
                  User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $addToSet: { friends: friend } },
                    { runValidators: true, new: true }
              )        
          //   .then((user) =>
          //     !user
          //     ? res.status(404).json({ message: 'No user exists with this id!' })
          //     : res.json(user)
          // )
            // .catch((err) => res.status(500).json(err));
          }
        });
          }
        })
    },
    deleteFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: { _id: req.params.friendId } } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
}