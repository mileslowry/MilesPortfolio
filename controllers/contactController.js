"use strict";

const { NotExtended } = require("http-errors");
const Contact = require("../models/contact");

module.exports = {

    contact: (req, res) => {
        res.render('contact');
    },

    thanks: (req, res) => {
        res.render('thanks');
    },

    sendMessage: (req, res) => {
        let messageParams = {
            name: req.body.name,
            email: req.body.email,
            company: req.body.company,
            subject: req.body.subject,
            message: req.body.message,
            date: new Date()
        };
        Contact.create(messageParams)
            .then(contact => {
                res.locals.redirect = "/contact/thanks";
                res.locals.contact = contact;
                next();
            })
            .catch(error => {
                console.log(`Error sending message: ${error.message}`);
                next(error);
            })
    }
}