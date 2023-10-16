const MenuItem = require("../models/menuItem");
const Category = require("../models/category")


const menuItemController = {
    getAllMenuItemsByUserId: async (req, res, next) => {
        const id = req.params.id;
        try {
            let resposne = await MenuItem.findAll({ where: { userId: id },include:{model:Category}})
            res.json(resposne)
        } catch (err) {
            return next(err)
        }

    },
    updateMenuItem: async (req, res, next) => {
        const { categoryId, name, userId, menuItemId } = req.body;
        try {
            let obj = {
                name: name, userId: userId, categoryId: categoryId,menuItemId:menuItemId
            }
            let response = await MenuItem.update(obj, { where: { menuItemId: menuItemId } });
            res.json(response)
        } catch (err) {
            return next(err)
        }
    },
    addMenuItem: async (req, res, next) => {
        const { name, userId, categoryId,price,imageUrl } = req.body;
        try {
            let obj = {
                name: name, userId: userId, categoryId: categoryId,price:price,imageUrl:imageUrl
            }
            console.log(obj);
            let response = await MenuItem.create(req.body);
            res.json(response)
        } catch (err) {
            return next(err)
        }
    },
    deleteMenuItem: async (req, res, next) => {
        const id = req.params.id;
        try {
            let response = await MenuItem.destroy({ where: { menuItemId: id } });
            res.json(response)
        } catch (err) {
            return next(err)
        }
    }

}
module.exports = menuItemController;