var mongo = require('mongodb').MongoClient;

var studData;
var get = function (param , callback) {
    mongo.connect('mongodb://localhost:27017/test', function (err, db) {
        if(err)
            console.log(err);
        else {

        //console.log('mongo db has connected');

        var data = db.collection('students');
        if (!param) {
            //console.log('null block');            
            data.find({}).toArray(function (err, docs) {
                if (err)
                    console.log(err);
                if (docs) {
                    if (typeof callback == "function")
                        callback(docs);
                }
            });
        
        } else {
            //console.log('lang block');
            //console.log(param);
            data.find({'age':{'$gte':param.age} , 'lang':param.lang}).toArray(function (err, docs) {
                if (err)
                    console.log(err);
                if (docs) {
                    //console.log('after return');
                    if (typeof callback == "function")
                        callback(docs);
                }
            });

        }
        db.close();
    }
});
}

var addStudent = function (params , callback) {
    var result ;
    mongo.connect('mongodb://localhost:27017/test', function (err, db) {
        if(err)
            console.log(err);
        else{
            var data = db.collection('students');
            data.insertOne({'name':params.name,'age':params.age , 'lang':params.lang}).then(function(data){
                if (typeof callback == "function")
                    callback(data.result);
                
            })
            db.close();
        }
        //db.close({forceClose:true});
    });
    
    return result;
}

var studentContr = {
    getData: get,
    addStudent:addStudent
}

module.exports = studentContr;