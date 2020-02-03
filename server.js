const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./db/index.js');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'public', 'index.html'))
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/item', (req, res) => {
  connection.query("SELECT item->>'$.tags' item FROM things", (err, results) => {
    console.log('RESULTS', results)
    res.send(results)
  });
});

app.listen(process.env.PORT || 3001);