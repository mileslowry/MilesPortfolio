"use strict";

const mongoose = require("mongoose");

const mediaSchema = new mongoose.SchemaType({
    fileName: {
        type: String,
        required: true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    altText: {
        Type: String
    }
})

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  markdown: {
    type: String,
    required: true
  },
  media: [{mediaSchema}],
  datePublished: {
      type: Date,
      default: new Date(),
      required: true
  }
});

module.exports = mongoose.model("Blog", blogSchema, "blog");