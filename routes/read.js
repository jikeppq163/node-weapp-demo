var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'gz-cdb-dollcvx2.sql.tencentcdb.com',
  port: 63174,
  user: 'root',
  password: 'jike95788',
  database: 'SharedProject'
});

connection.connect();
//执行SQL语句
var html ='';
connection.query('SELECT * FROM `YHZN_YSJ` WHERE 1', function (err, rows, fields) {
  if (err) {
    console.log('[query] - :' + err);
    return;
  }
  
  //console.log('Read Services Test:', rows[0].ID);
  
  html = "<html><body><table border='1' cellpadding='10'>";
  html += "<tr><td>ID</td><td>IDName</td><td>L</td><td>Money</td><td>MoneySend</td><td>NumTime</td><td>Text1</td><td>Text2</td><td>Text3</td><td>Type</td><td>Unit2</td></tr>";
  for(var i=0;i<rows.length;i++){
      html += 
      "<tr><td>"+rows[i].ID+"</td><td>"+rows[i].IDName+"</td><td>"+rows[i].L+"</td><td>"
      +rows[i].Money+"</td><td>"+rows[i].MoneySend+"</td><td>"+rows[i].NumTime+"</td><td>"+
      rows[i].Text1+"</td><td>"+rows[i].Text2+"</td><td>"+rows[i].Text3+"</td><td>"+
      rows[i].Type+"</td><td>"+rows[i].Unit+"</td></tr>";
  };
  html +="</table></body></html>";
  //console.log(html);
  return rows;
});
connection.end();




module.exports = (req, res) => {
  //console.log("%j", mysqlData)
  res.send(html);
};
