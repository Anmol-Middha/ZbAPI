var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/',function(req,res){
	res.send("hello world");
});

var server = app.listen(process.env.PORT || 8081,function(){
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})