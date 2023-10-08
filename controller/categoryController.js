
const Category = require("../models/category");

const categoryController = {
    getAllCategoryByUserId: async (req, res, next) => {
        const id = req.params.id;

        try {
            let resposne = await Category.findAll({ where: { userId: id } })
            res.json(resposne)
        } catch (err) {
            return next(err)
        }

    },
    updateCategory: async (req, res, next) => {
        const { categoryId, name, userId } = req.body;
        try {
            let obj = {
                name: name, userId: userId,
            }
            let response = await Category.update(obj, { where: { categoryId: categoryId } });
            res.json(response)
        } catch (err) {
            return next(err)
        }
    },
    addCategory: async (req, res, next) => {
        const { name, userId } = req.body;
        try {
            let obj = {
                name: name, userId: userId,
            }
            let response = await Category.create(obj);
            res.json(response)
        } catch (err) {
            return next(err)
        }
    },
    deleteCategory: async (req, res, next) => {
        const { categoryId } = req.body;
        try {
            let response = await Category.destroy({ where: { categoryId: categoryId } });
            res.json(response)
        } catch (err) {
            return next(err)
        }
    }

}
module.exports = categoryController;