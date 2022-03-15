const { cp } = require('fs');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bmi"
});

/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("CREATE DATABASE bmi",function(err,result){
        if (err) throw err;
        console.log("Database created")
    });
});*/

/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("CREATE TABLE user (ID_user INT, name VARCHAR(255), lastName VARCHAR(255), mail VARCHAR(255), password VARCHAR(255))",function(err,result){
        if (err) throw err;
        console.log("Table created")
    });
});*/

/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("CREATE TABLE user_DATA (ID_user INT, height FLOAT, weight FLOAT, BMI FLOAT)",function(err,result){
        if (err) throw err;
        console.log("Table created")
    });
});*/

conn.connect(function(err){
    if (err) throw err;
    sqlQ = "SELECT * FROM user"
    conn.query(sqlQ,function(err,result,fields){
        console.log(result[1].name)
    });

});