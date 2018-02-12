

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'gz-cdb-dollcvx2.sql.tencentcdb.com',
  port     : 63174,
  user     : 'root',
  password : 'jike95788',
  database : 'SaveUser'
});

connection.connect();

var mysqlData=connection.query('SELECT  * FROM `User`');
// , function (error, results, fields) {
//   if (error) html=error;
//   res.send(html);
// });

const html =mysqlData.toString();

connection.end();
module.exports = (req, res) => {
    res.send(html);
};
