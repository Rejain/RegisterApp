const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestsView = require('./View/RequestsView');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

requestsView(app);

app.listen(8080, () => {
    console.log("Listening for connection");
})
