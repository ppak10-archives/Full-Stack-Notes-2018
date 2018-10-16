// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Base file for starting Express server
// ----------------------------------------------------------------------------

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => res.sendFile(
  path.join(__dirname + '/index.html')));

app.use('/static', express.static(path.join(__dirname,'/../static')))

app.listen(port, () => console.log(
  `Express server listening on port: ${port}`));
