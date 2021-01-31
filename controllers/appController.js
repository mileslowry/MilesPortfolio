"use strict";

const Analytics = require('../models/analytics');

module.exports = {

    userAnalytics: (req, res, next) => {
        let line = {
            userId: req.cookies.userId,
            sessionId: req.cookies.sessionID,
            method: req.originalMethod,
            path: req.route.path + req.route.stack[1].name
        }
        console.log(line);
        Analytics.create(line)
            .then(next())
            .catch(error => {
                console.log(error);
                next(error);
            })
    }

}