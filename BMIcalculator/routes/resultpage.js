var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/resultpage',function(req,res,next){
    
    var sqlLU = "select ID_user from `user` where lastUsed = 1"

    db.query(sqlLU,function(err,data,fields){
        if (err) throw err;
        var sql = "select ud.height, ud.weight , ud.BMI from user_data ud where ud.ID_user = '"+data[0].ID_user+"'"

        db.query(sql,function(err,data,fields){
            if(err) throw err;
            res.render('results',{userData : data});
        })
    })

})

module.exports = router;