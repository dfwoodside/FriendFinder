// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// ==============================================================================
//bodyParser ... what it does and why you need it.
//body-parser does what it says it does: it parses the HTTP request body. This is 
//usually necessary when you need to know more than just the URL being hit, 
//more specifically in the context of a POST, PATCH or PUT HTTP request where 
//the information you want is contained in the body.

//Using body parser allows you to access req.body from within your routes, and 
//use that data for example to create a user in a database.

//A lot of frameworks other than Express have this functionality baked into the 
//library, Express being the minimalistic framework it is, has this as a separate 
//middleware module.
// ==============================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ==============================================================================
//MODULE LOAD
//Node uses 2 core modules for managing module dependencies:
//'require' and 'module' both of which are available globally.  The main object
//exported by the 'require' module is a function.  When Node invokes the
//require () function with a local file path as the functions only arguement,
//Node goes through the following sequence of steps:

//Resolving: To find the absolute path of the file
//Loading: To determine the type of the file content
//Wrapping: To give the file its private scope. This is what makes both the
//'require' and 'module' objects local to every file we require.
//Evaluating: This is what the VM eventually does with the loaded code.
//Caching: So that when we require this file again, we don't go over all the
//steps another time.
// ==============================================================================
require ("./app/Routing/apiRoutes.js")(app);
require ("./app/Routing/htmlRoutes.js")(app);


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });