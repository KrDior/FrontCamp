const express = require('express');
const winston = require('winston');

const expressWinston = require('express-winston');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const apiRouter = require('./rest/api');
const mockedData = require('./dbase/mockedData');

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// eslint-disable-next-line consistent-return
function errorHandler(err, req, res, next) {
    console.log(err, req, res, next);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.json({ error: err });
}
// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    next();
});

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            colorize: true,
            timestamp: true,
        }),
        new winston.transports.File({
            name: 'access-file',
            filename: 'access-error.log',
            level: 'info',
        }),
    ],
    metaField: null,
    responseField: null,
    format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    meta: false,
}));

app.use('/api', apiRouter);

app.use('/error', (request, response, next) => {
    next(new Error('This is an error and it should be logged to the console'));
});

app.use('/', (request, response) => {
    response.send(mockedData);
});

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console(),
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
    ),
}));

// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});
