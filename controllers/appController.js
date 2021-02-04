"use strict";

const Analytics = require('../models/analytics');
const dateFormat = require('dateformat');

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
        Analytics.create(line)
            .then(next())
            .catch(error => {
                console.log(error);
                next(error);
            })
    },

    analyticsView: async (req, res) => {
        let analytics = await Analytics.find();
        let dates = {};
        let cities = {};
        let sessions = {};
        analytics.forEach(data => {
            if (!(sessions.hasOwnProperty(data.sessionId))) {
                sessions[data.sessionId] = [data];
                if (!(cities.hasOwnProperty(data.city))) {
                    cities[data.city] = 1;
                } else {
                    cities[data.city] += 1;
                };
                let dataDate = new Date(data.dateTime);
                let day = dataDate.getDate(); let month = dataDate.getMonth() + 1; let year = dataDate.getFullYear();
                let formattedDate = month + '/' + day + '/' + year;
                if (!(dates.hasOwnProperty(formattedDate))) {
                    dates[formattedDate] = 1;
                } else {
                    dates[formattedDate] += 1;
                }
            } else {
                sessions[data.sessionId].push(data);
            }
        });
        res.render("analytics", {sessions: sessions, cities: cities, dates: dates, dateFormat: dateFormat});
    }

}