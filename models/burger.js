var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll(function (data) {
            callback(data);
        });
    },
    insertOne: function (burger, callback) {
        orm.insertOne(burger, function (data) {
            callback(data);
        });
    },
    updateOne: function (id, callback) {
        orm.updateOne([id], function (data) {
            callback(data);
        });
    }
};

module.exports = burger;