const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const Router = require('./config/routes');

app.use('/api', Router);

app.listen(port, "0.0.0.0", () => console.log('Express is listening on port ' + port));

module.exports = app; // This is so I can require it in my tests.