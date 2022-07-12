const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, 
                unique: true,  
                required: true, 
                trim: true },
    email: { type: String,
             required: true, 
             unqiue: true, 
             validate: [validateEmail, 'Please enter a valid email address'] },
    thoughts: [thoughtSchema],
    friends: [userSchema]
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;  