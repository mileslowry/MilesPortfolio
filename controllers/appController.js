"use strict";

const Analytics = require('../models/analytics');

module.exports = {

    userAnalytics: (req, res, next) => {
        let line = {
            sessionId: req.sessionID,
            method: req.originalMethod,
            path: req.route.path,
            goTo: req.route.stack[1].name
        }
        console.log(line);
        // console.log(line);
        Analytics.create(line)
            .then(next())
            .catch(error => {
                console.log(error);
                next(error);
            })
    }

}