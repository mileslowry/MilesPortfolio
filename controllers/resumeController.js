const Resume = require("../models/resume"),
    dateformat = require("dateformat");

module.exports = {
    index: (req, res, next) => {
        Resume.find()
          .then(items => {
            res.locals.items = items;
            next();
          })
          .catch(error => {
            console.log(`Error fetching resume items: ${error.message}`);
            next(error);
          });
    },
    indexView: (req, res) => {
        res.render("resume", {dateformat: dateformat});
    }
}