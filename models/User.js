const { Schema, model} = require('mongoose');

// Function to validate email use regex
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: { 
        type: String, 
        unique: true,  
        required: true, 
        trim: true 
    },
    email: { 
        type: String,
        required: true, 
        unqiue: true, 
        validate: [validateEmail, 'Please enter a valid email address'] 
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create virtual to display friend count
userSchema.virtual('friendCount').get(function () {
    return `Friend Count: ${this.friends.length}`;
});

// Create and export the user model
const User = model('user', userSchema);

module.exports = User;  