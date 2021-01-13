"use strict";

const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  startDate: {
      type: Date,
      required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  bullets: [String]
});

module.exports = mongoose.model("Resume", resumeSchema, "resume");