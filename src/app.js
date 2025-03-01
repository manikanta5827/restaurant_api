const { cors, morgan } = require('./utils/libraries');
const express = require('express');
const { PORT, NODE_ENV } = require('./utils/envVariables');
const errorHandler = require('./utils/errorHandler');
const menuRoutes = require('./modules/menu/routes/menuRoutes');
const authRoutes = require('./modules/auth/routes/authRoutes');
const basicRoutes = require('./modules/basic/basicRoutes');

const app = express();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//error handler
app.use(errorHandler);

//routes
app.use('/', basicRoutes);
app.use('/api', menuRoutes);
app.use('/auth', authRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
});






