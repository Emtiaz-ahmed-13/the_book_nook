import { Router } from 'express';
import app from './server';

const router = Router();

// Define your routes here
app.get('/', (req, res) => {
  res.send(
    '<h1>Welcome to The Book Nook</h1><p>Explore our collection of books!</p>',
  );
});

// Add more routes for specific actions (e.g., get a single book, create a book, etc.)
// Example for a route to fetch a book by ID:
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Book with ID: ${id}`);
});

export { router as bookRoutes };
