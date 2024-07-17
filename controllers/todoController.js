const TodoItem = require('../models/TodoItem');


exports.addItem = async (req, res) => {
  try {
    const { itemName, date, description } = req.body;
    const newItem = new TodoItem({ itemName, date, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.listItems = async (req, res) => {
  try {
    const items = await TodoItem.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error listing items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing to-do item

// Update an existing to-do item, including marking as completed
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, date, description, completed } = req.body;

    // Check if completed field is provided, update accordingly
    let updateFields = { itemName, date, description };
    if (completed !== undefined) {
      updateFields.completed = completed;
    }

    const updatedItem = await TodoItem.findByIdAndUpdate(id, updateFields, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

  // Delete a to-do item
  exports.deleteItem = async (req, res) => {
    try {
      const { id } = req.params;
      await TodoItem.findByIdAndDelete(id);
      res.status(204).send(); // No content
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };