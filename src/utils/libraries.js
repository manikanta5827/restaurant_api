const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const morgan = require('morgan');
const yaml = require('js-yaml');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');


module.exports = { crypto, jwt, cors, morgan, yaml, express, swaggerUi, fs };