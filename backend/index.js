const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const password = require('./secret/donotread');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'cycle'
})
db.connect();


//item data
app.get("/item-comments",(req,res)=>{
    const items = db.query('SELECT * FROM item',(error, results)=> {
        if (error) throw error;
        //console.log(results);
        // res.send(results)
        console.log(results);
    });
    //console.log("some stuff");
    //console.log(items);
    res.send("donk");
})

//item data
app.get("/item",(req,res)=>{
    db.query('SELECT * FROM item',(error, results)=> {
        if (error) throw error;
        console.log(results);
        res.send(results)
    });
})
// app.post("/POST-item", (req, res)=> {
//     db.query(`INSERT INTO item (name, brand, brandInfo, genre, genreInfo, price, Img) VALUES("${req.body.name}","${req.body.brand}","${req.body.brandInfo}","${req.body.genre}","${req.body.genreInfo}","${req.body.price}","${req.body.Img}")`)
// })

//item comment data
app.get("/comment",(req,res)=>{
    db.query('SELECT * FROM comment',(error, results)=> {
        if (error) throw error;
        console.log(results);
        res.send(results)
    });
})

app.post("/POST-Comment", (req, res)=> {
    db.query(`INSERT INTO comment(Title, Text, itemID) VALUES("${req.body.name}","${req.body.comment}","${req.body.ID}")`)
})

//customer data
app.get("/data",(req,res)=>{
    db.query('SELECT * FROM customer',(error, results)=> {
        if (error) throw error;
        console.log(results);
        res.send(results)
    });
})
app.post("/POST-data", (req, res)=> {
    db.query(`INSERT INTO customer (firstName, lastName, city, country, zipCode, phoneNumber) VALUES("${req.body.firstName}","${req.body.lastName}","${req.body.city}","${req.body.country}","${req.body.zipCode}","${req.body.phoneNumber}")`)
})


app.listen("3001",()=>{
    console.log("blah 3001");
})



