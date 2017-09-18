var express = require("express");
var router = express.Router();
var studentCon = require("../controller/studentController");


var results ;
router.get("/", function(req, res){
	//console.log('inside the router');
	studentCon.getData(null , function(data){
		//console.log('in callback');
		results = data;        
		//res.json(results);
		res.render("krma");
	});
       
}).post("/", function (req, res) {
    
	var name = req.body.name;
	var age = +req.body.age;
	var lang = req.body.lang;
	var params  = {"name":name , "age":age , "lang":lang};
	studentCon.addStudent(params , function(result){
		//console.log('result post in router');
		//console.log(result);
		res.json(result);
	});
})


	.get("/age/:age/lang/:lang", function(req, res){
		var params ={
			age: +req.params.age,
			lang: req.params.lang !="null" ? req.params.lang : null
		};

		studentCon.getData(params, function(data){
			//console.log('in callback');
			results = data;        
			res.json(results);
			//res.render('karma');

    
		}); 
	});

module.exports = router;