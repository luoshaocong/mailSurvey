const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);



const app = express();
//middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    //30days
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
//require turns to function, call with app object
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);






const PORT = process.env.PORT || 5000;

app.listen(PORT);
