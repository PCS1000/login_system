// load up our shiny new route for users
import userRoutes from "./users";

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/", (req, res) => {
    res.send("Suave?");
  });

  // run our user route module here to complete the wire up
  userRoutes(app, fs);
};

// this line is unchanged
export default appRouter;