'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 http://www.w3schools.com/js/js_strict.asp
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var sunlight = require('../../thirdparty_api/sunlight');


/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  getLegislator: getLegislator
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */




function getLegislator(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var lat = req.swagger.params.lat.value;
  var long = req.swagger.params.long.value;

  var locQuery = {
  latitude: lat,
  longitude: long
  };
  var APP_CONFIG = {
    CREDENTIALS:{SUNLIGHT:{API_KEY:process.env.SUNLIGHT_API}},
    API:{SUNLIGHT_BASE_URL:"https://congress.api.sunlightfoundation.com"}
            }
  sunlight.locateLegislatorsViaSunlight(locQuery, APP_CONFIG, function(err, data) {
  if (err) {
    res.status(400).json(err);
  }
  console.log(data)
  res.json(data['results']);
  // console.log(data)
  //
  // var modelData = map(data['results'], function(rawLegislator) {
  //   return new Legislator(changeCaseKeys(rawLegislator, 'camelize'))
  // });
  // if data['results'] !== undefined
  //   {}
  // else
  //   {res.json([]);}

  });

}
