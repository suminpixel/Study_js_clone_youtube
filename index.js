const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = 4000;

function handleListening() {
    console.log('Listening on : ' + PORT);
}


const handleHome = (req, res) => {res.send('Home!!')};
const betweenHome = (req, res, next) => {
    console.log('middle ware---');
    next();
};
app.use(betweenHome);
app.get('/', handleHome);
app.listen(PORT, handleListening);
