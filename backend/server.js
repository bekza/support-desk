const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
