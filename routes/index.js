const express = require('express')
const authController = require('../controller/Auth/authController')
const categoryController = require('../controller/categoryController')
const menuItemController = require('../controller/mentItmeController')
const auth = require('../middlewares/auth')
const userController = require('../controller/userController')
const router = express.Router()

//Auth Routes
router.post("/register", authController.register)
router.post("/login", authController.login)

//User Routes
router.get("/getUserDetails", auth,userController.getUserDetails)

//category Routes
router.get("/categoryByUserId/:id", auth,categoryController.getAllCategoryByUserId)
router.put("/updateCategoryById", auth,categoryController.updateCategory)
router.post("/addCategory", auth,categoryController.addCategory)
router.delete("/deleteCategoryById/:id", auth,categoryController.deleteCategory)

//Menu Items Routes
router.get("/menuItemsByUserId/:id", auth,menuItemController.getAllMenuItemsByUserId)
router.put("/updateMenuItemsById", auth,menuItemController.updateMenuItem)
router.post("/addMenuItems", auth,menuItemController.addMenuItem)
router.delete("/deleteMenuItemsById/:id", auth,menuItemController.deleteMenuItem)

module.exports = router