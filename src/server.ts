import cors from 'cors';
import express from 'express';
import { bookRoutes } from './app/routes/bookRoutes';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/books', bookRoutes);

// Ensure the app listens to a valid port
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

export default app;
