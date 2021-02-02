"use strict";

const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema({
    sessionId: String,
    method: String,
    path: String,
    goTo: String,
    zipCode: {
        type: Number,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    latitude: {
        type: Number,
        default: null
    },
    longitude: {
        type: Number,
        default: null
    },
    ip: {
        type: String,
        default: null
    },
    dateTime: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model("Analytics", analyticSchema, "analytics");