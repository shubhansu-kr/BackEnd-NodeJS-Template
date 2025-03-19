const express = require('express');
const router=express.Router();

const {getTrack, setTrack} = require("./../controllers/trackController")

router.post("/getTrack", getTrack);
router.post("/setTrack", setTrack);

module.exports = router;