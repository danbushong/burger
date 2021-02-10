const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Durango11790',
  database: 'burgers_db',
});


// Export connection for our ORM to use.
module.exports = connection;