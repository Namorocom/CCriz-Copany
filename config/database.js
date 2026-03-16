const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/yourdatabase'; // Replace with your database name

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;
