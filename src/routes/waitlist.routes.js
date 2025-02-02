const express = require("express");
const { join, getWaitlistCount, getWaitlist } = require("../controllers/waitlist.controllers");
const router = express.Router ();




router.post('/join', join);
router.get('/count', getWaitlistCount);
router.get('/all', getWaitlist);









module.exports = router;
