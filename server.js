/*** GLOBAL FILE IMPORT ****/
require('./globals/functions');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/config');
const cors = require('cors');
const routes = require('./routes');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api-docs/swagger.json');
require('./utils/logger');


/*** JWT KEY ****/
var port = process.env.port || 3000;
var app = express();
app.use(morgan('combined')); 
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
router = express.Router();
app.use('', routes);
app.use('/arh-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, function () {
  console.log('Web server listening on localhost:' + port);
});

process.on('uncaughtException', function (error) {
  console.log(error);
});