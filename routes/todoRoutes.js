// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('/add', todoController.addItem);
router.get('/list', todoController.listItems);
router.put('/update/:id', todoController.updateItem);
router.delete('/delete/:id', todoController.deleteItem);

module.exports = router;
