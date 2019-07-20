const express = require('express')
const bodyParser = require('body-parser')

const app = express();


app.get('/testing', (req, res) => {
    console.log('testing route hit');
    res.send(200);
})

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Set Port
const PORT = process.env.PORT || 5000;

// Listening
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})