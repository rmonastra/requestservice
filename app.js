//Dependencies the app.js will use to perform functions, list can be found in the package.json file.
var express = require('express'); //NodeJs framework that allows you to build APIs
var bodyParser = require('body-parser'); //reads HTTP POST data
var cors = require('cors'); //allows Cross-origin resource sharing(cors)
var useragent = require('express-useragent'); //module to collect web browser, operating system and other data

//creates the app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cors({ optionSuccessStatus: 200 })); //get around browsers who have trouble with 204
app.use(useragent.express());

//API
var api = '/api/whoami';
//Function & variables to retrieve user info
app.get(api, function(req, res, next) {
    var language = req.acceptsLanguages();
    var software = "Operating system: " + req.useragent.os + ", Browser: " + req.useragent.browser;
    var ip = req.ip;
    //responds with data in JSON format
    res.json({ 'ip': ip, 'language': language, 'software': software })
});
//path for connection
app.listen(3000, function() {
    console.log("Listening on port: 3000");
});
//allows this code/file to be used by other files