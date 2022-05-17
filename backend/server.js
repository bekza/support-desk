const express = require('express');
const colors = require('colors');
const path = require('path');
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

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  // set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__firname, '../frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) =>
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  );
}
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
