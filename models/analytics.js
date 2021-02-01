"use strict";

const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema({
    sessionId: String,
    method: String,
    path: String,
    goTo: String,
    dateTime: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model("Analytics", analyticSchema, "analytics");