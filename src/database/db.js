const mysql = require("mysql2");

// Parse JAWSDB_URL if available
const dbUrl = process.env.JAWSDB_URL;

let dbConfig = {};

const urlParts = dbUrl.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
if (!urlParts) {
  console.error('Invalid database URL');
  process.exit(1);
}

const [, dbUser, dbPassword, dbHost, dbPort, dbName] = urlParts;

dbConfig = {
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  port: parseInt(dbPort, 10), // Convert port to integer
};

// Create connection
const db = mysql.createConnection(dbConfig);

module.exports = db;
