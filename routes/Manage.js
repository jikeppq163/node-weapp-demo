var html = require('html5');
var fs = require('fs');
var login = require('login');
var mysql = require('mysql');
var express = require('express');
var router = express();

//var htm=123;

fs.readFile('./Manage/index.html',function(err,data){
    if (err) {
        return console.error(err);
    }
    //console.log("异步读取: " + data.toString());
     html = data.toString();
});



module.exports = (req, res) => {
    res.send(html);
};