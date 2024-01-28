const mysql = require("mysql2");

const DB_URL = process.env.JAWSDB_URL;

const extract = DB_URL.match(
  /mysql:\/\/(?<user>\w+):(?<password>\w+)@(?<host>\w+):(?<port>\w+)\/(?<database>\w+)/
);

const { user, password, host, port, database } = extract.groups;

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
  port: port,
});

module.exports = db;
