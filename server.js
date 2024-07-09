var express = require('express');
var cors = require('cors');
const fetch = (...args) => 
    import('node-fetch').then(({default: fetch}) => fetch(...args));

var bodyParser = require('body-parser');

const CLIENT_ID = "Ov23lil8Z6B45d2ZRNnL";
const CLIENT_SECRET = "1dca0d7a642c7c1f503076b2eb3b6ec314f78d80";

var app = express();

app.use(cors());
app.use(bodyParser.json());


app.listen(5173, () => {
    console.log('Server started on http://localhost:5173');
});