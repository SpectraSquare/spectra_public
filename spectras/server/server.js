const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Devanshi@9876",
  database: "ssdb",
});

app.post("/register", (req, res) => {
  const sql =
    "insert into register (`firstname`, `lastname`,`email`,`password`) values (?,?,?,?)";
  console.log(req.body);
  db.query(
    sql,
    [req.body.firstname, req.body.lastname, req.body.email, req.body.password],
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

app.post("/login", (req, res) => {
  const sql = "select *from register where email =? AND password =?";

  db.query(sql, [req.body.email, req.body, req.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("Login successful");
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(8081, () => {
  console.log("Listening...");
});
