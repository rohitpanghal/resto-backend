const express = require('express')
const authController = require('../controller/Auth/authController')
const categoryController = require('../controller/categoryController')
const menuItemController = require('../controller/mentItmeController')
const router = express.Router()

//Auth Routes
router.post("/register", authController.register)
router.post("/login", authController.login)

//category Routes
router.get("/categoryByUserId/:id", categoryController.getAllCategoryByUserId)
router.put("/updateCategoryById", categoryController.updateCategory)
router.post("/addCategory", categoryController.addCategory)
router.delete("/deleteCategoryById/:id", categoryController.deleteCategory)

//Menu Items Routes
router.get("/menuItemsByUserId/:id", menuItemController.getAllMenuItemsByUserId)
router.put("/updateMenuItemsById", menuItemController.updateMenuItem)
router.post("/addMenuItems", menuItemController.addMenuItem)
router.delete("/deleteMenuItemsById/:id", menuItemController.deleteMenuItem)


module.exports = router