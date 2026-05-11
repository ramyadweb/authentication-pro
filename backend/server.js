const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sequelize, connectDB } = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

dotenv.config();

// Connect to Database
connectDB();

// Sync models
sequelize.sync().then(() => {
  console.log('Database synced...');
}).catch(err => {
  console.error('Failed to sync database:', err.message);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
