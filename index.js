const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');

const routes = require('./src/routes/index');

// Initializing express app
const app = express();
// Adds helmet middleware
app.use(helmet());

// Body-parser
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

//multer
app.use(multer({ dest: './uploads/' }).single('file'));

// Enable cors
app.use(cors());

// Rate limiter
const apiLimiter = rateLimit({
	windowMs: 1000,
	max: 10,
	message: {
		msg: 'Too many requests have been received from this IP, please try again after sometime',
	},
});

// limiting api usage
app.use('/v1', apiLimiter);
app.get('/webApp', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});
// Reverse proxy
app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc

// Router Initialization
app.get('/v1', (req, res) => {
	res.status(200).json({ msg: 'Welcome to API Services' });
});

app.use('/v1', routes);

module.exports = app;
