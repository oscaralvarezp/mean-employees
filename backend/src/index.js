const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const employeesRoutes = require('./routes/employees.routes');
const { mongoose } = require('./database');

const app = express();

// Settings:
app.set('port', process.env.PORT || 3000);

// Middlewares:
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes:
app.use('/api/employee', employeesRoutes);

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});