//Import the top-level function of express
var express = require('express');

// Creates an Express application using the top-level function
var app = express();

// Define port number as 3000
const port = process.env.PORT || 3000;

// Set path
var path = require("path");

//Other packages
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')

// Set public route
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img'));
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
  response.sendFile(__dirname+'/index.html');
});



app.post('/endpoint', function(req, res){
  
  res.send();
  
  var transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user: 'zagsterbikesleasing@gmail.com',
      pass: 'ZagsterBikes124!'
    }
  });

  var mailOptions = {
    from: 'zagsterbikesleasing@gmail.com',
    to: 'bostonbikerentals@gmail.com',
    subject: 'New Bike Lease',
    text: JSON.stringify(req.body)
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});





// Make the app listen on port 3000
app.listen(port, function() {
  console.log('Server listening on http://localhost:' + port);
});