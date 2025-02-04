const mysql = require('mysql2');

// Create a connection pool to the database
const pool = mysql.createPool({
  host: '192.168.110.132',       // Replace with your database host
  user: 'root',     // Replace with your database username
  password: 'rootpassword',     // Replace with your database password
  database: 'angular', // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10, // Limit the number of connections
  queueLimit: 0       // No limit for the queue
});

module.exports = pool;
