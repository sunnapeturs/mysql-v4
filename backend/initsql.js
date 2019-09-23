const mysql = require('mysql');
const password = require('./secret/donotread');
//const fetch = require('isomorphic-fetch');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'cycle'
})

db.connect();

// customer table

// db.query('CREATE DATABASE cycle');
// db.query('USE cycle');
// db.query(`CREATE TABLE IF NOT EXISTS customer (
//     ID Int AUTO_INCREMENT NOT NULL,
//     firstName varchar(46),
//     lastName varchar(46),
//     city varchar(46),
//     country varchar(46),
//     zipCode INT,
//     phoneNumber INT, 
//     PRIMARY KEY (ID)
// )`, (error, results)=> {
//         if (error) throw error;
//         console.log(results);
//     })


// Item table

db.query('USE cycle');
db.query(`CREATE TABLE IF NOT EXISTS  item(
    ID Int AUTO_INCREMENT NOT NULL,
    name varchar(46),
    brand varchar(46),
    brandInfo varchar(100),
    genre varchar(46),
    genreInfo varchar(100),
    price INT,
    Img varchar(100),
    PRIMARY KEY (ID)
    )`, (error, results)=> {
     if (error) throw error;
    console.log(results);
 })
 db.query(`CREATE TABLE IF NOT EXISTS comment (
    ID Int AUTO_INCREMENT NOT NULL,
    itemID Int NOT NULL,
    Title varchar(100),
    Text varchar(255),
    PRIMARY KEY (ID),
    FOREIGN KEY (itemID) REFERENCES item(ID)
)`, (error, results)=> {
    if (error) throw error;
    console.log(results);
})
