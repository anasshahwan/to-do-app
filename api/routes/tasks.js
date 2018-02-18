const express = require('express');
const router = express.Router();
const checkIfAuth = require('../middleware/check-if-auth');
const TasksController = require('../controllers/tasks');


// get all Task
router.get('/', checkIfAuth, TasksController.get_all_task);

// get TaskById
router.get('/:taskId', checkIfAuth , TasksController.get_taskById);

// Update TaskById
router.patch('/:taskId', checkIfAuth, TasksController.updateTask);

//  Delete TaskById
router.delete('/:taskId', checkIfAuth, TasksController.deleteTask );

// Add Task
router.post("/", checkIfAuth , TasksController.addTask);

module.exports = router;
