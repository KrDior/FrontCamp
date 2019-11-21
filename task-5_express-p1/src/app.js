const express = require('express');
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

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', apiRouter);

app.use('/', (request, response) => {
    response.send(mockedData);
});

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});
