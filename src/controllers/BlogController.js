const Blog = require('../models/BlogModel');  // This should match your model location

const controller = {};

controller.list = async (req, res) => {

  console.log('hi');
  try {
    const blogs = await Blog.find({}, 'id title');
    res.json(blogs);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
};

controller.create = async (req, res) => {
  try {
    const { title } = req.body;

    const newBlog = new Blog({ title });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error('Error saving blog:', err);
    res.status(500).json({ error: 'Failed to save blog' });
  }
};

module.exports = controller;