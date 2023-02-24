const userController = require('../controllers/UserController');
const router = require('express').Router();
router.post('/addUser',userController.createUser);
router.get('/users',userController.getAllUser);
router.get('/user/:id',userController.getUser);

module.exports = router;