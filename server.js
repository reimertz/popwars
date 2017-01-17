// buildstrap demo server.

var consolidate = require('consolidate'),
    express = require('express'),
    swig = require('swig'),

    app = express(),
    port = process.env.PORT || 3001,
    rockets = [];

app.set('templateMap', {
    'rocket': 'desktop/rocket',
    'bomb': 'desktop/bomb',
    'product': 'desktop/product'
  }
);


app.use('/css', express.static(__dirname + '/build/css'));
app.use('/js', express.static(__dirname + '/build/js'));
app.use('/img', express.static(__dirname + '/src/img'));
app.use('/fonts', express.static(__dirname + '/src/fontss'));
//app.use(express.favicon(__dirname + '/src/img/favicon.png'));
//app.use(express.bodyParser());
app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/build/html');
swig.setDefaults({ cache: false });


app.post('/rockets/:id', function (req, res) {
  
  rockets[req.params.id] = req.body;
  res.end();
});

app.get('/rockets', function (req, res) {
  res.write(JSON.stringify(rockets));
  res.end();
});

app.get('/:route?', function (req, res) {
  require('./controllers/static').call(app, req, res);
});


app.listen(port);

console.log('Running buildstrap demo server on port ' + port);
