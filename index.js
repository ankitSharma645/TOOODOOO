// server.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

const cors = require('cors');
const app = express();
  
  // Apply CORS middleware

  app.use(cors());
// Middleware
app.use(express.json());
// routes/todoRoutes.js

app.use('/api/todo',todoRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, "./Frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./beta/build/index.html"));
});
// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
