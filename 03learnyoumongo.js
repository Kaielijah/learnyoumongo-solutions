var mongo = require('mongodb').MongoClient;
var age = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
  // db gives access to the database
  var parrots = db.collection('parrots');
  parrots.find({
    age: {
      $gt: parseInt(age)
    }
  }).toArray(function(err, docs) {
    if (err) throw err;
    console.log(docs);
    db.close();
  });



});
