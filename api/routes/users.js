var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/users');
const checkIfAuth = require('../middleware/check-if-auth');


// Create User
router.post("/signup", UsersController.userSignUp );

// Login User
router.post("/login", UsersController.userLogin);

// Delete User
router.delete("/:userId", checkIfAuth, UsersController.deleteUser);

module.exports = router;
