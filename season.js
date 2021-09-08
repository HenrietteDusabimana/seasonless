const dbConnectionManager = require('../dbconnection');

var connection;
module.exports = {

    selectUsers: function() {

        try {

            connection = dbConnectionManager.dbConnection()

            connection.query('SELECT * FROM user', function (error, results, fields) {
                if (!error) {

                    //let response = "The solution is: " + results[0].solution;
                    console.log(results);
                    return results;

                } else {
                    console.log(error);
                }
            });
            connection.end();

        } catch (err) {
            console.log(err);
        }
    }
};