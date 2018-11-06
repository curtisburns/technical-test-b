const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const Router = require('./config/routes');


app.use(express.static(`${__dirname}/dist`));


app.use('/api', Router);


app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(port, () => console.log('Express is listening on port ' + port));

module.exports = app; // This is so I can require it in my tests.