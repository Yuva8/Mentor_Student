const express = require('express');
const dotenv = require('dotenv');
const mongodb = require("./shared");
const mentor_student = require("./Router/Mentor_Student")


dotenv.config();

const app = express();

app.use(express.json());

mongodb.connectMongoose();

app.use('/mentor',mentor_student);
app.use('/student',mentor_student);

app.get("/", function (req, res) {
    res.send("Student & Mentor Database");
  });

app.listen(process.env.PORT  || 3002);

