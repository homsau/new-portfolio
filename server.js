require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var request = require('request')

var PORT = process.env.PORT || 8080;

var app = express();

var username = process.env.USERNAME;
var password = process.env.PASSWORD;
// var siteKey = process.env.SITE_KEY;
var secretKey = process.env.SECRET_KEY;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/app_controller.js");

app.use("/", routes);

app.post('/submit',function(req,res,e) {
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    console.log("Beep Boop: You are a robot");
    return;
  } else {
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl,function(error,response,body) {
      body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
      if(body.success !== undefined && !body.success) {
        console.log("second nah");
      } else {
        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: username,
            pass: password
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        var mailOptions = {
          from: '"Portfolio Contact 🤘🏻🔥" <james.cowart.portfolio@gmail.com>',
          to: 'james.p.cowart@gmail.com',
          subject: 'Contact Me',
          html: req.body.name + ' is trying to reach you!' + '</br>' +
            'Name: ' + req.body.name + '</br>' +
            'Email: ' + req.body.email + '</br>' +
            'Message: ' + req.body.message
        };
        transporter.sendMail(mailOptions, function(error, info) {
          if(error){
            console.log(error);
            console.log('oops');
          } else {
            console.log(info.response);
            console.log('hooray');
            
            res.redirect('/');
          }
        })
      }
    });
  }
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
