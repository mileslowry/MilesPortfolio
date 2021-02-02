// modules
const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  mongoMorgan = require('mongoose-morgan'),
  layouts = require('express-ejs-layouts'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  methodOverride = require("method-override"),
  Router = require('./routes/index'),
  axios = require('axios'),
  logger = require('morgan');

require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({resave: true, saveUninitialized:true, secret: process.env.SECRET, cookie: {maxAge: 1000 * 60 * 60 * 24 * 14}}));
app.use(mongoMorgan(
  {
    collection: 'log',
    connectionString: process.env.MONGODB_URI,
  }, 
  {
    skip: function (req, res) {
    return res.statusCode < 400 || res.statusCode === 304;
    }
  },
  ':method :url :status'
));
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', true);

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.use(async (req, res, next) => {
  let ip = req.ip;
  console.log(ip);
  let resp = await axios.get(`http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK}`);
  let currentLocation = resp.data;
  res.locals.location = currentLocation;
  console.log(currentLocation);
  next();
})

app.use('/', Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) { 
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

  console.log(err.message)
});

module.exports = app;
