const mysql = require('mysql');

    var connection;

    module.exports = {

    dbConnection: function () {

        connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: 'test'
        });
        connection.connect();
        return connection;
    }

    };