var express = require('express');
var router = express.Router();
var db=require('../database');
var app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());



router.get('/mainpage',function(req,res,next){
    res.cookie('name','pablo')
    console.dir(req.cookies.name)
    res.render('mainpage');
})

router.post('/addData',function(req,res,next){
    const dataEntered = req.body
    var height = (dataEntered.heightInput)/100
    var weight = dataEntered.weightInput

    if (height == 0 || weight == 0){
        console.log("Wrong data input")
        res.redirect('/bmi/mainpage')
    }else{
        var bmi = weight/(height*height)

        var sqlLU = "select ID_user from `user` where lastUsed = 1"

        db.query(sqlLU,function(err,data,fields){
            if (err) throw err;
            var sql = "insert into user_data (ID_user,height,weight,BMI) VALUES('"+data[0].ID_user+"','"+height+"','"+weight+"','"+bmi+"')";
            db.query(sql,function(err,data){
                if(err) throw err;
                console.log("Data inserted")
                res.redirect('/bmi/mainpage')
            });

        })

    }

})

  
module.exports = router;