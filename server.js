const express = require("express");
const path = require("path");
const ejs = require("ejs");
const router = require('./routes');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let data = [
    {
        name: 'Ta Minh Hieu',
        msv: '19020070',
    },
];

app.locals.studentData = data;

//Apis
app.use('/api/students', router.studentRouter);

//Views
app.get("/students", ((req, res) => {
    res.render("get")
}))
app.get("/update_info", ((req, res) => {
    res.render("update")
}))
app.get("*", ((req, res) => {
    res.render("list")
}))

app.listen(3000)