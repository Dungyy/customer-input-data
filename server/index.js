const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const lastname = req.body.number;
  const phone = req.body.inventory;
  const email = req.body.shipped;
  const ordernumber = req.body.received;
  const orderstatus = req.body.received;
  const ordercompleted = req.body.received;

  db.query(
    "INSERT INTO customers (name, lastname, phone, email, ordernumber, orderstatus, ordercompleted) VALUES (?,?,?,?,?,?,?)",
    [name, lastname, phone, email, ordernumber, orderstatus, ordercompleted],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// app.get("/data", (req, res) => {
//   db.query("SELECT * FROM customers", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Yay, Your server is running on port ${PORT}`);
});
