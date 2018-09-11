// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads playlist.html
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Playlisted"
    });
  });
};
