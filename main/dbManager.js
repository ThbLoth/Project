/*Create the connection to the database*/
const { cp } = require('fs');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bmi"
});


/*Creating the database */
/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("CREATE DATABASE bmi",function(err,result){
        if (err) throw err;
        console.log("Database created")
    });
});*/


/*Creating the table user where will be stored all the registered accounts */
/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("CREATE TABLE user (ID_user INT, name VARCHAR(255), lastName VARCHAR(255), mail VARCHAR(255), password VARCHAR(255))",function(err,result){
        if (err) throw err;
        console.log("Table created")
    });
});*/


/*Creating the table user_DATA where will be stored the data and the results of the BMI calculator, using a foreign key
to identify each result */
/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("CREATE TABLE user_DATA (ID_user INT, height FLOAT, weight FLOAT, BMI FLOAT)",function(err,result){
        if (err) throw err;
        console.log("Table created")
    });
});*/

/*Some test on the insert query that will be used in the the save button*/
/*
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MYSQL !")
    conn.query("INSERT INTO user_DATA(ID_user, height, weight, BMI) VALUES (1,187,90,25.7)",function(err,result){
        if (err) throw err;
        console.log("Data inserted")
    });
});*/

/*Some test on the select query that will be used on the display result page*/

conn.connect(function(err){
    if (err) throw err;
    sqlQ = "SELECT * FROM user"
    conn.query(sqlQ,function(err,result,fields){
        console.log(result[1].name)
    });

});