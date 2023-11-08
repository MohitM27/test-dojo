const mongoose = require("mongoose");
const BookModel = require("../models/Book");

exports.isValidId = async (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

exports.createBook = async (data) => {
  return await BookModel.create(data);
};
exports.getBookById = async (id) => {
  return await BookModel.findById(id,'title author summary');
};

exports.getAllBooks = async () => {
  return await BookModel.find({},'title author summary');
};

exports.deleteBookById = async (id) => {
  return await BookModel.findByIdAndRemove(id);
};

exports.updateBookById = async (id, data) => {
  return await BookModel.findByIdAndUpdate(id, data);
};
