import { Request, Response } from 'express';
import formateBookData from '../../helper/formateBookData';
import { Book } from '../models/Book';
import { bookValidationSchema } from '../validations/bookValidationSchema';

// Get all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No books found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: books.map(formateBookData),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

// Get a specific book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate the ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        message: 'Invalid book ID',
        success: false,
      });
    }

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: formateBookData(book),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  try {
    // Validate request body using the validation schema
    const validatedData = bookValidationSchema.parse(req.body);

    // Create the new book in the database
    const newBook = await Book.create(validatedData);

    const response = {
      message: 'Book created successfully',
      success: true,
      data: formateBookData(newBook),
    };

    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

// Update a book
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { price, quantity } = req.body;

    // Validate the ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        message: 'Invalid book ID',
        success: false,
      });
    }

    // Check if at least one field (price or quantity) is provided
    if (price === undefined && quantity === undefined) {
      return res.status(400).json({
        message: 'Price and/or quantity are required',
        success: false,
      });
    }

    // Find and update the book
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { price, quantity },
      { new: true },
    );

    if (!updatedBook) {
      return res.status(404).json({
        message: 'Book not found',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: formateBookData(updatedBook),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

// Delete a book
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate the ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid book ID',
      });
    }

    // Find and delete the book
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      message: 'Book deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};
