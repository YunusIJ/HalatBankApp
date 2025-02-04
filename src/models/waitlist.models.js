const mongoose = require("mongoose");
const waitlistSchema = new mongoose.Schema ({


    firstName : {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
        unique: true,

    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    businessInfo: {
        type: String,
        required: true,
    }
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('waitlist', waitlistSchema);



