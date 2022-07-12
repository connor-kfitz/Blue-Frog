const { Schema, model} = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: { type: String, 
                unique: true,  
                required: true, 
                trim: true },
    email: { type: String,
             required: true, 
             unqiue: true, 
             validate: [validateEmail, 'Please enter a valid email address'] },
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
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;  