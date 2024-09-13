const mongoose = require('mongoose');

// Blog schema definition
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
   
});

// Export the Blog model
module.exports = mongoose.model('Blog', blogSchema);
