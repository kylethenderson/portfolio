const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.post('/api/contact', (req, res) => {
    res.sendStatus(200);
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