module.exports = {

    landingPage: (req, res) => {
        res.render("index");
    },

    viewBio: (req, res) => {
        res.render("bio");
    }
};