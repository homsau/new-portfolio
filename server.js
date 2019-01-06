var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

var PORT = process.env.PORT || 8000;

var app = express();

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

app.post('/send', function(req, res) {
  console.log(req.body.message);
  console.log(req.body.email);
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'james.cowart.portfolio@gmail.com',
      pass: 'jpc-Portfolio'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: 'James Cowart - Full Stack Flex Web Development <james.cowart.portfolio@gmail.com>',
    to: 'james.p.cowart@gmail.com',
    subject: 'Contact Me',
    html: 'Name: ' + req.body.name + '</br>' +
          'Email: ' + req.body.email + '</br>' +
          'Message: ' + req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log(info.response);
      // alert('Thank you for contacting me! I will get back to you as soon as I can.');
      // res.redirect('/');
    }
  })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
