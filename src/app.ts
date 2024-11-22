import cors from 'cors';
import express from 'express';
import { bookRoutes } from './app/routes/bookRoutes';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/books', bookRoutes);

export default app;
