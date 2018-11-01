var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('home');
});

app.listen(process.env.PORT || 8080, process.env.IP, function(){
    console.log('server starts on: '+ process.env.IP + ": " +  process.env.PORT || 8080);
})