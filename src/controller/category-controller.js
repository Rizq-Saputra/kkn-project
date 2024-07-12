// controller/category-controller.js
const CategoryService = require('../service/category-service');

const createCategory = async (req, res, next) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).json({ message: 'Category created successfully', data: category });
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json({ data: categories });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
