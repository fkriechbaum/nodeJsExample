var express = require('express')
var path = require('path')

var app = express()

var dateipfad  = path.join(__dirname, 'public', 'donate.html')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(dateipfad)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
