const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/blog";

mongoose.set('strictQuery', true);

const connectDB = () => {
    return mongoose.connect(DB_URL, {
    })
};

module.exports = connectDB