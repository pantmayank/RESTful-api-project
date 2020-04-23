# RESTful-api-project

## Creating a simple server:

1. Run npm init to create a package.json file
2. Install express `npm i --save express`
3. Create server.js and app.js files
4. Run the files using `node server.js`
5. Check your json response at localhost:3000

- Each route goes into app.use() and are redirected to the required routes defined in the [api folder](api) . Desired request are managed using different RESTful-api defined in each specific route file.

* Using nodemon for auto-reloding the server and updating the script in [package.json](package.json) to contain `"start" : "nodemon server.js"`

* Using morgan to funnel the requests through it and produce a console.log(), and used error handling by handling 404 error and all other errors that may occur.

* Using body-parser to read the body of POST requests and updating the post request to take body data and use it.

* Disabling all CORS so that SPA can freely send requests to cross-servers. It happens by funneling all the routes in the cors middleware and appending a header to each response that we send before the routes. P.S : we should always disable CORS request in case of RESTful-apis as they are meant to be consumed by other servers.
