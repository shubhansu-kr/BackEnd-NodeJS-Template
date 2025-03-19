const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        duration: {
            type: String, 
            default: "4"
        },
        cycle: {
            type: String,
            default: "24"
        }
    }
);

module.exports = mongoose.model("Track", trackSchema);