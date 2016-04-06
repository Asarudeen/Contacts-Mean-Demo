var express = require('express')
	,app 	= express()
	,mongoose = require('mongoose')
	,bodyParser = require('body-parser')
	,contactsController = require('./server/controllers/contactsController');

	//db Connection
	mongoose.connect('mongodb://localhost:27017/contacts');

app.get('/',function(req,res){
	res.sendfile(__dirname+'/public/views/index.html');
});

app.use(bodyParser());


app.use('/public',express.static(__dirname+'/public'));

// apis
app.get('/api/contacts',contactsController.list);
app.post('/api/contacts',contactsController.create);

app.listen(3000,'0.0.0.0',function(err){
	if(!err){
		console.log("App is in 3000");
	}
});

//app.get('/api/contacts',)