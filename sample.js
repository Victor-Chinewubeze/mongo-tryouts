var MongoClient = require('mongodb').MongoClient, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {

    if (err) {

        throw err;
    } else {
        console.log("You have successfully connected to Mongo");
    }

    db.close();
});