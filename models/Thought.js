const { Schema, model} = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: { type: String, 
                required: true, 
                minLength: 1,
                maxLength: 280 },
    createdAt: { type: Date,
             default: Date.now },
    username: { type: String,
                required: true
            },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reaction',
        },
    ],
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

//  Create a virtual called reactionCount that retrives the length of the thought's reactions arrary field on query?
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought