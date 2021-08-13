/**
 *The log middleware function logs the path and method of the routes
 */

function logger(req, res, next) {
  console.log("******************************************");
  console.log("path: " + req.path);
  console.log("method: " + req.method);
  next();
}

module.exports = logger;
