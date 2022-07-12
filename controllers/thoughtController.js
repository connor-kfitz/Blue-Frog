const { User, Thought, Reaction } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
      },
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err));
      },
    // updateUser(req,res) {
    //     User.findOneAndUpdate(
    //         { _id: req.params.userId },
    //         { $set: req.body },
    //         { runValidators: true, new: true }
    //     )
    //     .then((user) =>
    //     !user
    //       ? res.status(404).json({ message: 'No user with this id!' })
    //       : res.json(user)
    //   )
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(500).json(err);
    //   });
    // },
    // deleteUser(req, res) {
    //     User.findOneAndRemove({ _id: req.params.userId })
    //       .then((user) =>
    //         !user
    //           ? res.status(404).json({ message: 'No user with this id!' })
    //           : res.json(user)
    //       )
    //       .catch((err) => {
    //         console.log(err);
    //         res.status(500).json(err);
    //       });
    //   },
}