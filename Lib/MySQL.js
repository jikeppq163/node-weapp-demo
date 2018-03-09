var mysql = require('mysql');

var connection = {
  host: 'gz-cdb-dollcvx2.sql.tencentcdb.com',
  port: 63174,
  user: 'root',
  password: 'jike95788',
  database: 'SharedProject'
};

 var Services =mysql.createConnection({
  host: connection.host,
  port: connection.port,
  user: connection.user,
  password: connection.password,
  database: connection.database
 })

module.ServicesLib =Services; 

