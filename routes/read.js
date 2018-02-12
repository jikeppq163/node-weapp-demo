const html ='2';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.0.9',
  user     : 'root',
  password : 'jike95788',
  database : 'SaveUser'
});

connection.connect();

html=connection.query('SELECT  * FROM `User`', function (error, results, fields) {
  if (error) html=error;
  
  //app.get('/', function(req, res) 
  res.send(html);
  //});
  //html='222222';//results[0].NickName;
  //console.log('The solution is: ', results);
});

connection.end();

module.exports = (req, res) => {
    res.send(html);
};
