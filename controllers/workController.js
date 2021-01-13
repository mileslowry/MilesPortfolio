module.exports = {
    indexView: (req, res) => {
        res.render("work-index");
    },
    webDevView: (req, res) => {
        res.render("web-dev");
    },
    dataDevView: (req, res) => {
        res.render("data-dev");
    },
    dataVisView: (req, res) => {
        res.render("data-vis");
    },
    machineLearnView: (req, res) => {
        res.render("machine-learning");
    }
};