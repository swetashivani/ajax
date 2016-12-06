var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var url = require('url') ;
app.use(bodyParser());

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/" + "ex.htm" );
})

app.get('/ajax_get', function (req, res) {
   // Prepare output in JSON format
  
   var queryObject = url.parse(req.url,true).query;

   var response = 'Thank you for submiting'
   res.end(JSON.stringify(response));
});


app.post('/ajax_post', function (req, res) {
   // Prepare output in JSON format
 var response ='Hello '+req.body.userid;
   res.end(JSON.stringify(response));
});

var server = app.listen(8989, function () {  
   var port = server.address().port;
   console.log("Example app listening at port:",port);
});