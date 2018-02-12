var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.0.9',
  user     : 'root',
  password : 'jike95788',
  database : 'SaveUser'
});
 
connection.connect();

var html = connection.query('SELECT  * FROM `User`')

console.log(html);
connection.end();
