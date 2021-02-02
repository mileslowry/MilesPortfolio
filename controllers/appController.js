"use strict";

const Analytics = require('../models/analytics');

module.exports = {

    userAnalytics: (req, res, next) => {
        let line = {
            sessionId: req.sessionID,
            method: req.originalMethod,
            path: req.route.path,
            goTo: req.route.stack[1].name,
            zipCode: res.locals.location.zip,
            city: res.locals.location.city,
            latitude: res.locals.location.latitude,
            longitude: res.locals.location.longitude,
            ip: res.locals.location.ip
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