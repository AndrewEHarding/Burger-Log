var connection = require("./connection.js");

var orm = {

    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    insertOne: function (burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    updateOne: function (id, callback) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function (err, data) {
            if (err) throw err;
            callback(data);
        });
    }

}

module.exports = orm;