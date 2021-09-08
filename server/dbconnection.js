import mysql from "mysql";

var connection;

export function dbConnection() {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "seasonless",
  });
  connection.connect();
  return connection;
}
