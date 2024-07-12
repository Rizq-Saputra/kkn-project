// service/category-service.js
const Category = require('../models/category');

const createCategory = async (categoryData) => {
  const category = await Category.create(categoryData);
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};
