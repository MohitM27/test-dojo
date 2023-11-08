const bookService = require("../services/BookService");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    return res.json({ data: books, status: 200, message: "success" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    console.log("req.body",req.body)
    const { title, author, summary } = req.body;
    if (
      !title ||
      title === "" ||
      !author ||
      author === "" ||
      !summary ||
      summary === ""
    ) {
      res.status(400).json({
        status: 400,
        message:
          "Required Field is not there fields are (title, author, summary) !",
      });
    } else {
      const books = await bookService.createBook(req.body);
      if (books) {
        return res.json({ data: books, status: 201, message: "success" });
      } else {
        res.status(400).json({
          status: 400,
          message: "Something went wrong please try again !",
        });
      }
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ status: 400, message: "id is required for Book Info !" });
    } else if (!(await bookService.isValidId(id))) {
      res.status(400).json({ status: 400, message: "id is Invalid !" });
    } else {
      const books = await bookService.getBookById(id);
      return res.json({ data: books, status: 200, message: "success" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ status: 400, message: "id is required for Book Info !" });
    } else if (!(await bookService.isValidId(id))) {
      res.status(400).json({ status: 400, message: "id is Invalid !" });
    } else {
      const books = await bookService.deleteBookById(id);
      return res.json({ status: 200, message: "Book Deleted Successfully !" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.updateBookById = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ status: 400, message: "id is required for Book Info !" });
    } else if (!(await bookService.isValidId(id))) {
      res.status(400).json({ status: 400, message: "id is Invalid !" });
    } else {
      const { title, author, summary } = req.body;

      await bookService.updateBookById(id, { title, author, summary });
      return res.json({
        status: 200,
        message: "Book Updated Successfully !",
      });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
