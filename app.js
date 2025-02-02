const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./src/config/db");
const waitlistRoutes = require("./src/routes/waitlist.routes")



dotenv.config();

const app = express()
const port = process.env.PORT;


app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("WELCOME TO HALAT MOBILE APP")
});



app.use('/api/v1/', waitlistRoutes);

app.listen(port, () => {
    connectDb ();
    console.log(`server is running on port ${port}`);
});


