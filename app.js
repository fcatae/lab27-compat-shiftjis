var http = require('http');
var express = require('express');
var app = express();

app.get('/codepage.html', function(req,res) {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.sendFile( __dirname + '/codepage.html');
})

http.createServer(app).listen(8000);


app.get('/shift.html', function(req,res) {
	res.setHeader("Content-Type", "text/html; charset=shift_jis");
	res.sendFile( __dirname + '/shiftutf.html');
})
app.get('/teste2.html', function(req,res) {
	res.setHeader("Content-Type", "text/html; charset=shift_jis");
	res.sendFile( __dirname + '/teste2.html');
})
app.get('/teste3.html', function(req,res) {
	res.setHeader("Content-Type", "text/html; charset=shift_jis");
	res.sendFile( __dirname + '/teste3.html');
})
app.get('/ucs2.html', function(req,res) {
	res.setHeader("Content-Type", "text/html; charset=ISO-8859-1");
	res.sendFile( __dirname + '/ucs2.html');
    console.log('\uff0f TEMP \uff0f index.html');
})



app.use(express.static('.'));

http.createServer(app).listen(8000);

var a, b, c;

function serv(req,res) {
	a = req;
	res.end('hello')
	b = res;
	
	c = 1;
}