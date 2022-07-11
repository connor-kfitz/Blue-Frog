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
});

//  TODO: Create a virtual called friendCount that retrives the length of the user's friends array field?

const User = mongoose.model('User', userSchema);

module.exports = User;  