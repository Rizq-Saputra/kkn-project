const Category = require('../models/category');
const { createCategoryValidation } = require('../validation/category-validation');
const { validate } = require('../validation/validation');

const createCategory = async (categoryData) => {
  const validatedData = validate(createCategoryValidation, categoryData);

  // Buat kategori
  const category = await Category.create(validatedData);
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
