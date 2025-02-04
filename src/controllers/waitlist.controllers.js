const waitlist = require("../models/waitlist.models");


exports.join = async  (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        businessInfo,
    } = req.body;

    try {

        if( !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !businessInfo

        ) { 
            return res
            .status(400)
            .json({message: "Please Fill All Require Fields"});

        } 

        const newApplication = new waitlist ({

            
            firstName,
            lastName,
            email,
            phoneNumber,
            businessInfo
    });

    await newApplication.save();
    return res
    .status(201)
    .json({message: "Thank you for joining the Halat waitlist! We'll notify you when the app is live."});
        
    } catch (error) {
        console.error(error);
        return res
        .status(500)
        .json({message: "Server error"});
    }
        
    };

    exports.getWaitlistCount = async (req, res) => {
        try {
            const count = await waitlist.countDocuments();
            return res.status(200).json({ count });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    };

    exports.getWaitlist = async (req, res) => {
        try {
            const waitlistUsers = await waitlist.find();
            return res.status(200).json(waitlistUsers);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    };


