var db = require("../db/db.json");
const fs = require("fs");



module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(db);
    });
   
    app.post("/api/notes", function (req, res) {
        db.push(req.body);
        console.log(db, "line 22");

        fs.writeFile("./db/db.json", JSON.stringify(db, null), function (err, data) {
            if (err) throw err;
            else console.log("It works");
        }
        )
        res.json();
    });

};
