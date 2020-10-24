var path = require("path");

//express is being passed in as app
module.exports = function(app) {

// localhost:8080/notes
//if it is true, show user the notes page
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

//catch all, will default to the file below if everything above is false
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
