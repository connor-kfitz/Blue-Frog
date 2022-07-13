const { Schema, model, Types} = require('mongoose');
const dayjs = require('dayjs');

// Create Reaction Schema
const reactionSchema = new Schema({
    reactionId: { 
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: { 
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280 
    },
    username: { 
        type: String,
        required: true 
    },
    createdAt: { 
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format('MMMM D, YYYY h:mm A') }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Create Thought Schema
const thoughtSchema = new Schema({
    thoughtText: { 
        type: String, 
        required: true, 
        minLength: 1,
        maxLength: 280 
    },
    createdAt: { 
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format('MMMM D, YYYY h:mm A')
    },
    username: { 
        type: String,
        required: true
    },
    reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Create virtual to display reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create and export the thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought