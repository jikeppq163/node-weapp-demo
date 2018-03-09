var mysql = require('mysql');
var express = require('express');
var router = express();

var connection = mysql.createConnection({
  host: 'gz-cdb-dollcvx2.sql.tencentcdb.com',
  port: 63174,
  user: 'root',
  password: 'jike95788',
  database: 'SharedProject'
});
var html = '123';
/*
connection.connect();
//执行SQL语句
connection.query('SELECT * FROM `YHZN_YSJ` WHERE 1', function (err, rows, fields) {
  if (err) {
    console.log('[query] - :' + err);
    return;
  }
  //console.log('Rows测试', JSON.stringify(rows));
  
  html = JSON.stringify(rows);
  //console.log(html);
  return rows;
});
connection.end();

//var MySQL_Lib = request('../Lib/MySQL.js');

//console.log('Test:',MySQL_Lib);
*/

/*
connection.connect();
console.log('测试开始!');
var client ='YHZN_YSJ';  //客户
var List =['List1','List2','List3','List4'];
var Parameters =
['List','IDName','L','Money','MoneySend','NumTime',"Text1",'Text2','Text3','Type','Uint2'];
var ListData = 
{ID:"List1",IDName:'1', Money:'50',MoneySend:"000050",NumTime:"010",Text1:"1分钟",Text2:"¥",Text3:"0.5元",Type:"1",Uint2:"0001"};

var DataString = ' set ' + Parameters.Money.toString() + '="' + 
ListData.Money.toString() + '"' + ',' +Parameters.MoneySend.toString() + '="' + 
ListData.MoneySend.toString()+'"' ;

console.log(DataString);

var i=0;
connection.query('update '+ client + DataString.toString() +' where ID="' + List[i].toString() +'"', function(err, result) {
  if (err) throw err;
  console.log('MySQL updated Money='+ ListData.Money.toString() +"ID=" +List[i]);
  console.log('返回：',result);
  console.log('\n');
  });

connection.end();
*/

router.post("");

module.exports = (req, res) => {res.send("<p> 已经开始工作 <p>");};
