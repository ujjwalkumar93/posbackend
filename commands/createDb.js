var MongoClient = require('mongodb').MongoClient;
createDb = (dbName) => {
    let databaseName;
    dbName ? databaseName = dbName : databaseName = "PosDatabase"  
    checkExistingDb(databaseName);
    var url = `mongodb://localhost:27017/${databaseName}`;  
    MongoClient.connect(url, function(err, db) {  
    if (err) throw err; 
    if (db) console.log('db is: ',db);
    console.log("Database created!");  
    db.close();  
    });  
}

checkExistingDb = (databaseName) => {

}

createDb()
