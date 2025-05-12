const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bugRoutes = require('./routes/bugRoutes');
const projectRoutes = require('./routes/projectRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/bugs', bugRoutes);
app.use('/api/projects', projectRoutes);

module.exports = app;
