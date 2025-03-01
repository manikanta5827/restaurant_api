const { cors, morgan, yaml, express, swaggerUi, fs } = require('./utils/libraries');
const { PORT, NODE_ENV } = require('./utils/envVariables');
const { errorHandler } = require('./utils/errorHandler');
const menuRoutes = require('./modules/menu/routes/menuRoutes');
const authRoutes = require('./modules/auth/routes/authRoutes');
const basicRoutes = require('./modules/basic/basicRoutes');
const { sequelize } = require('./config/db');

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

//swagger
const swaggerDocument = yaml.load(fs.readFileSync('./src/core/swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//start server
app.listen(PORT, async () => {
    await sequelize.sync({ force: false });
    console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
});






