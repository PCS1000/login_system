// load up the express framework and body-parser helper
import express from 'express'

// create an instance of express to serve our end points
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
import fs from 'fs'

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// this is where we'll handle our various routes from
const routes = require("./src/routes/routes.js.js")(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3333,() => {
  console.log("listening on port %s...", server.address().port);
});