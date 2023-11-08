const express = require("express");
const {
  getAllBooks,
  createBook,
  getBookById,
  deleteBookById,
  updateBookById,
} = require("../controllers/BookController");
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /book:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

router.get("/", getAllBooks);

/**
 * @swagger
 * /book:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              author:
 *                type: string
 *              summary:
 *                type: string
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


router.post("/", createBook);

/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 *       404:
 *         description: The book was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/:id", getBookById);

/**
 * @swagger
 * /book/{id}:
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              author:
 *                type: string
 *              summary:
 *                type: string
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *
 *      400:
 *        description: The book was not found
 *        content:
 *           application/json:
 *             schema:
 *               type: object
 *      500:
 *        description: Some error happened
 *        content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put("/:id", updateBookById);

/**
 * @swagger
 * /book/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: The book was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

router.delete("/:id", deleteBookById);

module.exports = router;
