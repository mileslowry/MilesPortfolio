const Resume = require("../models/resume"),
    dateformat = require("dateformat");

module.exports = {
    resume: (req, res) => {
        res.render("resume", {dateformat: dateformat});
    }
}