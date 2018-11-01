const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const Router = require('./config/routes');

app.use('/api', Router);

app.listen(port, () => console.log('Express is listening on port ' + port));
