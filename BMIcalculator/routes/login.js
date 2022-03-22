var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/form', function(req, res, next) { 
res.render('login'); 
});

router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO user SET ?';
  var sqlLastUsed = "update `user` set lastUsed = 1 where mail ='"+userDetails.mail+"'"
  var sqlUpdate = 'update `user` set lastUsed = 0'; //will allow to get userdata by bypassing cookies that seems bugged.
          
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
  db.query(sqlUpdate,function(err,data){
    if (err) throw err;
  })
  db.query(sqlLastUsed,function(err,data){
    if (err) throw err;
  });
 res.redirect('/bmi/mainpage');
});

router.post('/connect',function(req,res,next){

  const userCred = req.body;
  const userMail = userCred.mail;
  const userPW = userCred.password;

  var sqlMail = "SELECT IF((SELECT 1 FROM user WHERE EXISTS(SELECT 1 FROM user WHERE mail='"+userMail+"') AND mail='"+userMail+"')=1,'1','0') AS RES";
  var sqlPW = "SELECT u.password FROM user u WHERE u.mail = '" +userMail+"'"

  db.query(sqlMail, function(err,data,fields){
    if (err) throw err;

    if (data[0].RES == 1){
      db.query(sqlPW,function(err,data,fields){
        if (err) throw err;
        var dbPW = data[0].password;

        if (dbPW == userPW){

          var sqlUpdate = 'update `user` set lastUsed = 0'; //will allow to get userdata by bypassing cookies that seems bugged.
          var sqlLastUsed = "update `user` set lastUsed = 1 where mail ='"+userMail+"'"
          db.query(sqlUpdate,function(err,data){
            if (err) throw err;
          })

          db.query(sqlLastUsed,function(err,data){
            if (err) throw err;
          })

          res.redirect('/bmi/mainpage')
        }else{
          res.redirect('/login/form')
          console.log("Password incorrect")
        }

      });
    }else {
      res.redirect('/login/form')
      console.log("This email doesn't exist in our database")
    }

  });


});

module.exports = router;