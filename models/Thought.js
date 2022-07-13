const { Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
                },
    reactionBody: { type: String,
                    required: true,
                    minLength: 1,
                    maxLength: 280 },
    username: { type: String,
                required: true },
    createdAt: { type: Date,
        default: Date.now }
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

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
    reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//  Create a virtual called reactionCount that retrives the length of the thought's reactions arrary field on query?
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

thoughtSchema.virtual('formattedDate').get(function () {
    return this.createdAt;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought