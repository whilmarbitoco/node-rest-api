const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const createConnection = require("./database");

const app = express();

const db = createConnection();

// middleware
app.use(bodyParser.json());

// root 
app.get("/", (req, res) => {
  res.send("Node.js Rest Api with express.js and sqlite3 by Whilmar Bitoco")
})


// SHOW ALL USER
app.get("/users", (req, res) => {
    db.all("SELECT * FROM user", (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err.message);
            res.status(500).send("Internal Server Error");
        }
    });
});

//SHOW ONLY ONE USER
app.get("/users/:id", (req, res, next) => {
    const id = req.params.id;
    db.all("SELECT * FROM user WHERE id = ?", [id], (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    });
});

//DELETE USER
app.delete("/users/:id", (req, res, next) => {
    const id = req.params.id;
    db.run("DELETE FROM user WHERE id = ?", [id], (err, rows) => {
        if (!err) {
            res.status(200).json("{'message': 'user successfully deleted'}");
        } else {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    });
});

// ADD USER
app.post("/users", (req, res) => {
    const { name, gender, age } = req.body;
    db.run(
        "INSERT INTO user(name, gender, age) VALUES (?, ?, ?)",
        [name, gender, age],
        (err, rows) => {
            if (!err) {
                res.json("{'message': 'user successfully added'}");
            } else {
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        }
    );
});

//UPDATE A USER
app.post("/users/:id", (req, res, next) => {
    const { id, name, gender, age } = req.body;
    db.run(
        "UPDATE user SET name = ?, gender = ?, age = ? WHERE id = ?",
        [name, gender, age, id],
        (err, rows) => {
            if (!err) {
                res.json("{'message': 'user successfully updated'}");
            } else {
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        }
    );
});

const PORT = 300
app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});