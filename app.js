const express = require('express');
const app = express();

const db = require('./database/db'); // Correct path to your database file

const blogRoutes = require('./src/routes/api'); // Adjusted path

app.use(express.json()); // Middleware to parse JSON

app.use('/api', blogRoutes); // Use routes

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});