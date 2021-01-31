"use strict";

const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema({
    userId: String,
    sessionId: String,
    method: String,
    path: String,
    dateTime: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model("Analytics", analyticSchema, "analytics");