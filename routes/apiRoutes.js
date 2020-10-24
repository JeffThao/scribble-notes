const db = require("../db/db.json");
const fs = require("fs");
const { uuid } = require('uuidv4');

console.log(uuid());
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    app.post("/api/notes", function (req, res) {
        let myNote = req.body;
        let id = uuidv4();
        myNote.id = id;

        db.push(myNote);

        fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), function (err, data) {
            if (err) {
                throw err;
            } else {
                res.json(myNote);
            }
        })

    });

}
