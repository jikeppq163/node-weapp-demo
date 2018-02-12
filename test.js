var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.0.9',
  user     : 'root',
  password : 'jike95788',
  database : 'SaveUser'
});
 
connection.connect();
var ddd=0; 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  ddd=results[0].solution;
});

console.log(ddd);


