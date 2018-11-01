const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const Router = require('./config/routes');

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.append('Access-Control-Allow-Header', 'Content-Type');
//   next();
// });


app.use('/api', Router);

app.listen(port, () => console.log('Express is listening on port ' + port));
