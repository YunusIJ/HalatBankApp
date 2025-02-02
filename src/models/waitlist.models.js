const mongoose = require("mongoose");
const waitlistSchema = new mongoose.Schema ({


    firstName : {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    phoneNumber: {
        type: Number,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    businessInto: {
        type: String,
        require: true
    }
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('waitlist', waitlistSchema);



