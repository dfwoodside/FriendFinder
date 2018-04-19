// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require('path');

// ================================================================================
//ROUTE MANAGEMENT
// ================================================================================
module.exports = function (app) {

    //Route to display the survey page
    app.get("/survey", function (request, response) {
        response.sendFile(path.join(__dirname, "./../Public/0-survey.html"));
    });

    //If no matching route is found, default to the home page
    app.get("*", function (request, response) {
        response.sendFile(path.join(__dirname, "./../Public/0-home.html"));
    });
}