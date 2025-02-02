const mongoose = require("mongoose");
require("dotenv").config ();



const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
    console.log("CONNECTED TO DATABASE")
        
    } catch (error) {
        console.error("error connecting to database:", error.message);
        process.exit(1);
        
    }
};

module.exports = connectDb;