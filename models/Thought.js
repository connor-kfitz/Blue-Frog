const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, 
                required: true, 
                minLength: 1,
                maxLength: 280 },
    createdAt: { type: Date,
             default: Date.now },
    username: { type: String,
                required: true
            },
    reactions: [reactionSchema]
});

//  Create a virtual called reactionCount that retrives the length of the thought's reactions arrary field on query?

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought